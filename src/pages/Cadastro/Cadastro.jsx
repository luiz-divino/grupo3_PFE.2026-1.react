import { useState } from "react";
import banner from "../../assets/images/backgrounds/fundo-amarelo.jpg";
import { Link } from "react-router-dom";
import { FormSubmitFields } from "../../components/FormSubmitFields/FormSubmitFields.jsx";
import { FORM_SUBMIT_PROPS } from "../../constants/formSubmit.js";
import { useFormSubmit } from "../../hooks/useFormSubmit.js";
import "./cadastro.css";
import { Hero } from "../../components/Hero/Hero.jsx";

const INITIAL_CADASTRO = {
    nome: "",
    email: "",
    telefone: "",
    cargo: "",
    empresa: "",
    linkedin: "",
    motivo: "",
};

const beneficios = [
    "Acesso à área de membros",
    "Newsletter semanal exclusiva",
    "Diretório de membros completo",
    "Inscrição prioritária em eventos",
    "Relatórios e análises do setor",
    "Alertas regulatórios em tempo real",
    "Participação em comitês técnicos",
    "Acesso ao acervo completo",
    "Networking estruturado",
    "Certificações com desconto",
];

const faqItems = [
    {
        pergunta: "Quais são as modalidades de associação disponíveis?",
        resposta: (
            <>
                A ACBrasil oferece três modalidades:{" "}
                <strong>Associado Efetivo</strong> (pessoa física ou jurídica
                que colabora com a missão da associação mediante mensalidade),{" "}
                <strong>Associado Mantenedor</strong> (pessoa jurídica que
                contribui financeiramente ou com recursos para o desenvolvimento
                da ACBrasil) e <strong>Associado Benemérito</strong>{" "}
                (reconhecido por contribuições relevantes à instituição).
            </>
        ),
    },
    {
        pergunta: "Quanto tempo leva para meu cadastro ser aprovado?",
        resposta: (
            <>
                O prazo médio de análise é de <strong>até 5 dias úteis</strong>.
                Você recebe um e-mail assim que o cadastro for aprovado, com
                suas credenciais de acesso à área de associados.
            </>
        ),
    },
    {
        pergunta: "Posso cancelar minha associação a qualquer momento?",
        resposta:
            "Sim. O desligamento pode ser solicitado a qualquer momento, sem burocracia. Basta entrar em contato pela área de membros ou pelo formulário de contato.",
    },
    {
        pergunta: "Quem pode se associar à ACBrasil?",
        resposta:
            "Profissionais, conselheiros, empresas e instituições ligados ao mercado de capitais brasileiro. Estudantes e pesquisadores da área também são bem-vindos.",
    },
];

const validators = {
    isName: (v) => /^[A-Za-zÀ-ÿ]+(\s+[A-Za-zÀ-ÿ]+)+$/.test(v.trim()),
    isEmail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    isPhone: (v) => /^\(\d{2}\)\s?\d{4,5}-\d{4}$/.test(v.trim()),
    isLinkedIn: (v) => v.trim() === "" || /linkedin\.com\/.+/i.test(v.trim()),
    hasText: (v, min = 1) => v.trim().length >= min,
};

export const Cadastro = () => {
    const [formData, setFormData] = useState(INITIAL_CADASTRO);
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const validar = () => {
        const { nome, email, telefone, cargo, empresa, linkedin, motivo } =
            formData;
        if (!validators.isName(nome)) return "Informe um nome completo válido.";
        if (!validators.isEmail(email))
            return "Informe um e-mail profissional válido.";
        if (!validators.isPhone(telefone))
            return "Informe um telefone válido no formato (11) 99999-9999.";
        if (!validators.hasText(cargo)) return "Informe seu cargo.";
        if (!validators.hasText(empresa)) return "Informe a empresa.";
        if (!validators.isLinkedIn(linkedin))
            return "Informe um link do LinkedIn válido ou deixe em branco.";
        if (!validators.hasText(motivo, 10))
            return "Descreva com mais detalhes por que deseja se associar.";
        return "";
    };

    const { handleSubmit, isSubmitting } = useFormSubmit({
        subject: "Cadastro ACBrasil",
        validate: validar,
        onSuccess: () => setFormData(INITIAL_CADASTRO),
        successMessage:
            "Cadastro enviado com sucesso! Em breve você receberá um e-mail com suas credenciais.",
    });

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <main>
            {/* HERO */}
            <Hero banner={banner}>
                <div className="hero-cad-content">
                    <span className="hero-cad-badge">ASSOCIE-SE</span>
                    <h1>
                        Construa as melhores práticas de{" "}
                        <span className="hero-cad-highlight">
                            governança corporativa e otimização de processos
                        </span>
                    </h1>
                    <div className="hero-cad-buttons">
                        <a href="#form-cadastro" className="btn-cad-primary">
                            Quero me associar &rarr;
                        </a>
                        <Link to="/contato" className="btn-cad-ghost">
                            Falar com a equipe
                        </Link>
                    </div>
                </div>
            </Hero>

            {/* MODALIDADES */}
            <section className="gratuito-cad">
                <div className="section-container">
                    <div className="gratuito-cad-header">
                        <span className="gratuito-cad-badge">
                            MODALIDADES DE ASSOCIAÇÃO
                        </span>
                        <h2>Encontre o modelo certo para você</h2>
                        <p>
                            A ACBrasil conta com diferentes formas de
                            participação — Associado Efetivo, Mantenedor e
                            Benemérito — para que profissionais e organizações
                            contribuam e se beneficiem de acordo com seu perfil.
                        </p>
                    </div>

                    <div className="gratuito-grid">
                        {beneficios.map((beneficio) => (
                            <div className="gratuito-item" key={beneficio}>
                                <span className="gratuito-check">
                                    <svg
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                                {beneficio}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FORMULÁRIO DE CADASTRO */}
            <section className="form-cad-section" id="form-cadastro">
                <div className="section-container">
                    <div className="form-cad-header">
                        <span className="cad-label">CADASTRO</span>
                        <h2>Faça parte da ACBrasil</h2>
                        <p>
                            Preencha o formulário abaixo. Após a análise do seu
                            cadastro, você receberá um e-mail com suas
                            credenciais de acesso.
                        </p>
                    </div>

                    <form
                        className="form-cad-card"
                        {...FORM_SUBMIT_PROPS}
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <FormSubmitFields
                            subject="Cadastro ACBrasil"
                            formName="cadastro"
                        />
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cad-nome">
                                    Nome completo *
                                </label>
                                <div className="input-with-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <input
                                        type="text"
                                        id="cad-nome"
                                        name="nome"
                                        placeholder="Seu nome"
                                        autoComplete="name"
                                        value={formData.nome}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cad-email">
                                    E-mail profissional *
                                </label>
                                <div className="input-with-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                    <input
                                        type="email"
                                        id="cad-email"
                                        name="email"
                                        placeholder="seu@email.com"
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cad-telefone">Telefone *</label>
                                <div className="input-with-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.8 19.8 0 01.1 2.18 2 2 0 012.08 0h3a2 2 0 012 1.72c.13 1 .36 1.97.71 2.91a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.17-1.17a2 2 0 012.11-.45c.94.35 1.91.58 2.91.71A2 2 0 0122 16.92z" />
                                    </svg>
                                    <input
                                        type="tel"
                                        id="cad-telefone"
                                        name="telefone"
                                        placeholder="(11) 98765-4321"
                                        autoComplete="tel"
                                        value={formData.telefone}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cad-cargo">Cargo *</label>
                                <div className="input-with-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <rect
                                            x="2"
                                            y="7"
                                            width="20"
                                            height="14"
                                            rx="2"
                                            ry="2"
                                        />
                                        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                                    </svg>
                                    <input
                                        type="text"
                                        id="cad-cargo"
                                        name="cargo"
                                        placeholder="Seu cargo atual"
                                        autoComplete="organization-title"
                                        value={formData.cargo}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="cad-empresa">Empresa *</label>
                                <div className="input-with-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 21h18" />
                                        <path d="M5 21V7l8-4v18" />
                                        <path d="M19 21V11l-6-4" />
                                    </svg>
                                    <input
                                        type="text"
                                        id="cad-empresa"
                                        name="empresa"
                                        placeholder="Nome da empresa"
                                        autoComplete="organization"
                                        value={formData.empresa}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cad-linkedin">LinkedIn</label>
                                <div className="input-with-icon">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.8"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                                        <rect
                                            x="2"
                                            y="9"
                                            width="4"
                                            height="12"
                                        />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                    <input
                                        type="url"
                                        id="cad-linkedin"
                                        name="linkedin"
                                        placeholder="https://linkedin.com/in/seu-perfil"
                                        value={formData.linkedin}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="cad-motivo">
                                Por que deseja se associar à ACBrasil? *
                            </label>
                            <textarea
                                id="cad-motivo"
                                name="motivo"
                                rows="4"
                                placeholder="Conte um pouco sobre suas expectativas e objetivos..."
                                value={formData.motivo}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="btn-enviar btn-enviar--cad"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar cadastro"}
                        </button>

                        <p className="form-privacidade">
                            Ao enviar este formulário, você concorda com nossa{" "}
                            <a
                                href="/docs/politica-privacidade.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                política de privacidade
                            </a>{" "}
                            e termos de uso.
                        </p>
                    </form>
                </div>
            </section>

            {/* FAQ */}
            <section className="faq-section faq-section--cad">
                <div className="section-container">
                    <div className="faq-header">
                        <span className="section-label">FAQ</span>
                        <h2>Dúvidas frequentes</h2>
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

                    {/* CTA Final */}
                    <div className="cta-final-card">
                        <h3>Pronto para fazer parte?</h3>
                        <div className="cta-final-buttons">
                            <a
                                href="#form-cadastro"
                                className="btn-cad-primary"
                            >
                                Quero me associar &rarr;
                            </a>
                            <Link to="/contato" className="btn-cad-ghost">
                                Falar com a equipe
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
