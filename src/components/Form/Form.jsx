import { useState } from "react";
import { FormSubmitFields } from "../FormSubmitFields/FormSubmitFields.jsx";
import { FORM_SUBMIT_PROPS } from "../../constants/formSubmit.js";
import { useFormSubmit } from "../../hooks/useFormSubmit.js";
import "./form.css";

const FORMACAO_OPCOES = [
    { value: "", label: "—Escolha uma opção—" },
    { value: "conselheiro", label: "Conselheiro" },
    { value: "executivo", label: "Executivo / Diretor" },
    { value: "consultor", label: "Consultor" },
    { value: "academico ou estudante", label: "Acadêmico / Estudante" },
    { value: "outro", label: "Outro" },
];

const validators = {
    isName: (value) => /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/.test(value.trim()),
    isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    isPhone: (value) => /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(value.trim()),
    hasSelection: (value) => value.trim().length > 0,
};

const INITIAL_FORM = {
    nome: "",
    email: "",
    celular: "",
    formacao: "",
};

export const WebinarAvisoForm = () => {
    const [formData, setFormData] = useState(INITIAL_FORM);
    const [aceitePrivacidade, setAceitePrivacidade] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validate = () => {
        const { nome, email, celular, formacao } = formData;

        if (!validators.isName(nome)) {
            return "Informe um nome completo válido.";
        }
        if (!validators.isEmail(email)) {
            return "Informe um e-mail válido.";
        }
        if (!validators.isPhone(celular)) {
            return "Informe um celular válido no formato (11) 99999-9999.";
        }
        if (!validators.hasSelection(formacao)) {
            return "Selecione sua formação ou atuação.";
        }
        if (!aceitePrivacidade) {
            return "É necessário concordar com a Política de Privacidade.";
        }

        return "";
    };

    const { handleSubmit, isSubmitting } = useFormSubmit({
        subject: "Aviso de Webinars ACBrasil",
        validate,
        onSuccess: () => {
            setFormData(INITIAL_FORM);
            setAceitePrivacidade(false);
        },
        successMessage:
            "Cadastro realizado! Você receberá avisos sobre novos webinars.",
        extraData: () => ({
            aceite_privacidade: aceitePrivacidade ? "Sim" : "Não",
        }),
    });

    return (
        <div className="webinar-aviso-form">
            <header className="webinar-aviso-form__header">
                <h2>Quero ser avisado(a) sobre novos webinars</h2>
                <p>
                    Cadastre seu contato para receber notificações sobre os
                    próximos webinars da ACBrasil.
                </p>
            </header>

            <form
                className="webinar-aviso-form__card"
                {...FORM_SUBMIT_PROPS}
                onSubmit={handleSubmit}
                noValidate
            >
                <FormSubmitFields
                    subject="Aviso de Webinars ACBrasil"
                    formName="webinar-aviso"
                />

                <div className="webinar-aviso-form__row">
                    <div className="webinar-aviso-form__group">
                        <label htmlFor="webinar-nome">Nome</label>
                        <input
                            type="text"
                            id="webinar-nome"
                            name="nome"
                            placeholder="Seu nome completo"
                            autoComplete="name"
                            value={formData.nome}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="webinar-aviso-form__group">
                        <label htmlFor="webinar-email">E-mail</label>
                        <input
                            type="email"
                            id="webinar-email"
                            name="email"
                            placeholder="seu@exemplo.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="webinar-aviso-form__row">
                    <div className="webinar-aviso-form__group">
                        <label htmlFor="webinar-celular">Celular</label>
                        <input
                            type="tel"
                            id="webinar-celular"
                            name="celular"
                            placeholder="(11) 9xxxx-xxxx"
                            autoComplete="tel"
                            value={formData.celular}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="webinar-aviso-form__group">
                        <label htmlFor="webinar-formacao">
                            Formação / Atuação
                        </label>
                        <select
                            id="webinar-formacao"
                            name="formacao"
                            value={formData.formacao}
                            onChange={handleChange}
                        >
                            {FORMACAO_OPCOES.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <label className="webinar-aviso-form__consent">
                    <input
                        type="checkbox"
                        checked={aceitePrivacidade}
                        onChange={(event) =>
                            setAceitePrivacidade(event.target.checked)
                        }
                    />
                    <span>
                        Li e concordo com a{" "}
                        <a
                            href="/docs/politica-privacidade.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Política de Privacidade
                        </a>
                        .
                    </span>
                </label>

                <button
                    type="submit"
                    className="webinar-aviso-form__submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Enviando..." : "Quero ser avisado(a)"}
                </button>
            </form>
        </div>
    );
};
