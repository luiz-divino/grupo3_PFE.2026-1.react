import { useLocation } from "react-router-dom";
import "./backToTop.css";

export const BackToTop = () => {
    const { pathname } = useLocation();

    const handleBackToTop = () => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const focusTarget =
            document.querySelector("main h1") ?? document.querySelector("main");

        if (focusTarget) {
            const hadTabIndex = focusTarget.hasAttribute("tabindex");

            if (!hadTabIndex) {
                focusTarget.setAttribute("tabindex", "-1");
                focusTarget.addEventListener(
                    "blur",
                    () => focusTarget.removeAttribute("tabindex"),
                    { once: true },
                );
            }

            focusTarget.focus({ preventScroll: true });
        }

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    if (pathname === "/entrar" || pathname.startsWith("/fundador/")) {
        return null;
    }

    return (
        <div className="back-to-top-section">
            <button
                className="back-to-top-button"
                type="button"
                onClick={handleBackToTop}
            >
                <span className="back-to-top-icon" aria-hidden="true">
                    ↑
                </span>
                <span>Voltar ao topo</span>
            </button>
        </div>
    );
};
