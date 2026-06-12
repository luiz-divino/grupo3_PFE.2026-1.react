import { useCallback, useEffect, useRef, useState } from "react";
import { ToastContext } from "./toastContext.js";
import "./toast.css";

const DEFAULT_DURATION = 5000;

function ToastItem({ toast, onClose }) {
    const isSuccess = toast.type === "success";

    return (
        <div
            className={`toast toast--${toast.type}`}
            role={isSuccess ? "status" : "alert"}
            aria-live="polite"
        >
            <span className="toast__icon" aria-hidden="true">
                {isSuccess ? (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path d="M20 6L9 17l-5-5" />
                    </svg>
                ) : (
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                )}
            </span>

            <div className="toast__content">
                <span className="toast__title">
                    {isSuccess ? "Sucesso" : "Erro"}
                </span>
                <p className="toast__message">{toast.message}</p>
            </div>

            <button
                type="button"
                className="toast__close"
                aria-label="Fechar notificação"
                onClick={() => onClose(toast.id)}
            >
                ×
            </button>
        </div>
    );
}

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);
    const timersRef = useRef(new Map());

    const removeToast = useCallback((id) => {
        setToasts((current) => current.filter((toast) => toast.id !== id));

        const timer = timersRef.current.get(id);
        if (timer) {
            clearTimeout(timer);
            timersRef.current.delete(id);
        }
    }, []);

    const showToast = useCallback(
        ({ type = "success", message, duration = DEFAULT_DURATION }) => {
            const id = crypto.randomUUID();

            setToasts((current) => [...current, { id, type, message }]);

            if (duration > 0) {
                const timer = setTimeout(() => removeToast(id), duration);
                timersRef.current.set(id, timer);
            }
        },
        [removeToast],
    );

    useEffect(() => {
        const timers = timersRef.current;

        return () => {
            timers.forEach((timer) => clearTimeout(timer));
            timers.clear();
        };
    }, []);

    return (
        <ToastContext.Provider value={{ showToast, removeToast }}>
            {children}
            <div className="toast-container" aria-live="polite">
                {toasts.map((toast) => (
                    <ToastItem
                        key={toast.id}
                        toast={toast}
                        onClose={removeToast}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};
