import { useState } from "react";
import equipe from "../../assets/images/equipe.jpg";
import { FormSubmitFields } from "../../components/FormSubmitFields/FormSubmitFields.jsx";
import { FORM_SUBMIT_PROPS } from "../../constants/formSubmit.js";
import { useFormSubmit } from "../../hooks/useFormSubmit.js";
import "./contato.css";
import { Hero } from "../../components/Hero/Hero.jsx";

const INITIAL_CONTATO = {
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
};

const validators = {
    isName: (value) => /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/.test(value.trim()),
    isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    hasText: (value, min = 1) => value.trim().length >= min,
};

export const Contato = () => {
    const [formData, setFormData] = useState(INITIAL_CONTATO);
    const [imageError, setImageError] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const validar = () => {
        const { nome, email, assunto, mensagem } = formData;

        if (!validators.isName(nome)) {
            return "Informe um nome completo válido.";
        }
        if (!validators.isEmail(email)) {
            return "Informe um e-mail válido.";
        }
        if (!validators.hasText(assunto)) {
            return "Informe o assunto da mensagem.";
        }
        if (!validators.hasText(mensagem, 10)) {
            return "Descreva sua mensagem com mais detalhes.";
        }

        return "";
    };

    const { handleSubmit, isSubmitting } = useFormSubmit({
        subject: "Contato ACBrasil",
        validate: validar,
        onSuccess: () => setFormData(INITIAL_CONTATO),
        successMessage: "Mensagem enviada com sucesso! Retornaremos em breve.",
    });

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const faqItems = [
        {
            pergunta: "Como posso verificar o status da minha associação?",
            resposta:
                "Acesse a Área de Associados com seu e-mail e senha cadastrados. Na tela inicial do painel, você encontra o status atual da sua associação, data de vencimento e histórico de pagamentos.",
        },
        {
            pergunta:
                "Qual é o prazo para resposta após o envio do formulário de contato?",
            resposta:
                "O prazo padrão para respostas via formulário web é de até 48 horas úteis. Para demandas urgentes, recomendamos o contato por telefone ou WhatsApp, com atendimento mais ágil.",
        },
        {
            pergunta: "Como faço para alterar meus dados cadastrais?",
            resposta:
                'Alterações cadastrais podem ser feitas diretamente na Área de Associados, na seção "Meu Perfil". Caso tenha dificuldades de acesso, entre em contato com nosso suporte pelo e-mail ou formulário.',
        },
        {
            pergunta: "Posso cancelar minha associação a qualquer momento?",
            resposta:
                "Sim. O cancelamento pode ser solicitado a qualquer momento via formulário ou por e-mail. A solicitação será processada em até 5 dias úteis e o acesso será mantido até o fim do período vigente.",
        },
        {
            pergunta:
                "Tenho dúvidas sobre os benefícios do meu plano. Com quem falo?",
            resposta:
                "Nossa equipe de relacionamento está disponível para esclarecer qualquer dúvida sobre planos e benefícios. Entre em contato pelo telefone (11) 3333-0000 ou envie uma mensagem pelo formulário acima.",
        },
    ];

    return (
        <main>
            <Hero>
                <div className="content-wrapper">
                    <span className="badge">CONTATO</span>
                    <h1>Estamos aqui para ajudar</h1>
                    <p>
                        Seja para tirar dúvidas, conhecer melhor a ACBrasil ou
                        resolver questões relacionadas à sua associação — nossa
                        equipe está pronta para atender.
                    </p>
                </div>
            </Hero>

            <section className="canais-section">
                <div className="section-container">
                    <div className="canais-grid">
                        <div className="canal-card">
                            <div className="canal-icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <rect
                                        x="2"
                                        y="4"
                                        width="20"
                                        height="16"
                                        rx="3"
                                    />
                                    <path d="M2 7l10 7 10-7" />
                                </svg>
                            </div>
                            <span className="canal-label">E-MAIL</span>
                            <a
                                href="mailto:contato@acbrasil.org.br"
                                className="canal-value"
                            >
                                contato@acbrasil.org.br
                            </a>
                        </div>

                        <div className="canal-card">
                            <div className="canal-icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.8 19.8 0 01.1 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.13 1 .36 1.97.71 2.91a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.17-1.17a2 2 0 012.11-.45c.94.35 1.91.58 2.91.71A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <span className="canal-label">TELEFONE</span>
                            <a href="tel:+551133330000" className="canal-value">
                                (11) 99719-5099
                            </a>
                        </div>

                        <div className="canal-card">
                            <div className="canal-icon">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                >
                                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span className="canal-label">SEDE</span>
                            <span className="canal-value canal-value--highlight">
                                São Paulo, SP
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="formulario-section">
                <div className="section-container">
                    <div className="formulario-grid">
                        <div className="formulario-info">
                            <span className="subtitle">FORMULÁRIO</span>
                            <h2 className="title">
                                Envie uma mensagem
                                <br />
                                para nossa equipe
                            </h2>
                            <p className="description">
                                Preencha o formulário e nossa equipe de
                                relacionamento entrará em contato o mais breve
                                possível. Para questões urgentes, prefira o
                                telefone ou WhatsApp.
                            </p>
                            <div
                                className={`formulario-image ${imageError ? "formulario-image--placeholder" : ""}`}
                            >
                                {!imageError && (
                                    <img
                                        src={equipe}
                                        alt="Sede ACB Brasil"
                                        onError={handleImageError}
                                    />
                                )}
                            </div>
                        </div>

                        <form
                            className="formulario-card contato-form"
                            {...FORM_SUBMIT_PROPS}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <FormSubmitFields
                                subject="Contato ACBrasil"
                                formName="contato"
                            />
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="nome">
                                        Nome completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="nome"
                                        name="nome"
                                        placeholder="Seu nome"
                                        autoComplete="name"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="seu@email.com.br"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="assunto">Assunto *</label>
                                <input
                                    type="text"
                                    id="assunto"
                                    name="assunto"
                                    placeholder="Sobre o que você precisa falar?"
                                    value={formData.assunto}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensagem">Mensagem *</label>
                                <textarea
                                    id="mensagem"
                                    name="mensagem"
                                    rows="6"
                                    placeholder="Descreva sua solicitação com detalhes..."
                                    value={formData.mensagem}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn-enviar contato-submit"
                                disabled={isSubmitting}
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                                {isSubmitting
                                    ? "Enviando..."
                                    : "Enviar mensagem"}
                            </button>
                            <p className="form-privacidade">
                                Ao enviar, você concorda com nossa{" "}
                                <a
                                    href="/docs/politica-privacidade.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Política de Privacidade
                                </a>
                                .
                            </p>
                        </form>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="section-container">
                    <div className="faq-header">
                        <span className="section-label">FAQ</span>
                        <h2>Perguntas frequentes</h2>
                    </div>

                    <div className="faq-list">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openFaqIndex === index ? "open" : ""}`}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleFaq(index)}
                                    type="button"
                                >
                                    {item.pergunta}
                                    <svg
                                        className="faq-arrow"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </button>
                                {openFaqIndex === index && (
                                    <div className="faq-answer">
                                        <p>{item.resposta}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};
