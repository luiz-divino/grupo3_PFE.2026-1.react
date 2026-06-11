import { useCallback, useState } from "react";
import { useToast } from "../components/Toast/toastContext.js";
import { submitToFormSubmit } from "../utils/formSubmit.js";

export function useFormSubmit({
    subject,
    validate,
    onSuccess,
    successMessage = "Formulário enviado com sucesso!",
    errorMessage = "Não foi possível enviar o formulário. Tente novamente.",
    extraData,
}) {
    const { showToast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();

            if (validate) {
                const validationError = validate();
                if (validationError) {
                    showToast({ type: "error", message: validationError });
                    return;
                }
            }

            setIsSubmitting(true);

            try {
                await submitToFormSubmit(
                    event.currentTarget,
                    subject,
                    typeof extraData === "function"
                        ? extraData()
                        : extraData,
                );

                showToast({ type: "success", message: successMessage });
                onSuccess?.(event);
            } catch {
                showToast({ type: "error", message: errorMessage });
            } finally {
                setIsSubmitting(false);
            }
        },
        [
            subject,
            validate,
            onSuccess,
            successMessage,
            errorMessage,
            extraData,
            showToast,
        ],
    );

    return { handleSubmit, isSubmitting };
}
