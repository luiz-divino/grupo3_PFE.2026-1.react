import { FORM_SUBMIT_AJAX } from "../constants/formSubmit.js";

export async function submitToFormSubmit(formElement, subject, extraData = {}) {
    const formData = new FormData(formElement);

    if (subject) {
        formData.set("_subject", subject);
    }

    formData.set("_captcha", "false");
    formData.set("_template", "table");

    Object.entries(extraData).forEach(([key, value]) => {
        formData.set(key, value);
    });

    const response = await fetch(FORM_SUBMIT_AJAX, {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false) {
        throw new Error(
            result.message || "Não foi possível enviar o formulário.",
        );
    }

    return result;
}
