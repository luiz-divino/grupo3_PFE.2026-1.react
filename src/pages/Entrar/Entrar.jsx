import { useState } from "react";
import { Link } from "react-router-dom";
import { FormSubmitFields } from "../../components/FormSubmitFields/FormSubmitFields.jsx";
import { FORM_SUBMIT_PROPS } from "../../constants/formSubmit.js";
import { useFormSubmit } from "../../hooks/useFormSubmit.js";
import "./entrar.css";

const validators = {
    isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
    hasText: (value) => value.trim().length > 0,
};

export const Entrar = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [manterConectado, setManterConectado] = useState(false);

    const validate = () => {
        if (!validators.isEmail(email)) {
            return "Informe um e-mail válido.";
        }
        if (!validators.hasText(senha)) {
            return "Informe sua senha para continuar.";
        }
        return "";
    };

    const { handleSubmit, isSubmitting } = useFormSubmit({
        subject: "Login ACBrasil",
        validate,
        onSuccess: () => {
            setEmail("");
            setSenha("");
            setManterConectado(false);
        },
        successMessage:
            "Solicitação enviada com sucesso! Em breve integraremos a autenticação.",
        extraData: () => ({
            manter_conectado: manterConectado ? "Sim" : "Não",
        }),
    });

    return (
        <main>
            <section className="login-section">
                <div className="login-wrapper">

                    <div className="mb-login-card login-card-standalone">

                        <div className="mb-login-header">
                            <div className="mb-login-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>
                            <div>
                                <strong>Acessar minha conta</strong>
                                <span>Área exclusiva para associados ACBrasil</span>
                            </div>
                        </div>

                        <form
                            className="mb-login-form"
                            {...FORM_SUBMIT_PROPS}
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <FormSubmitFields
                                subject="Login ACBrasil"
                                formName="login-entrar"
                            />

                            <div className="form-group">
                                <label htmlFor="login-email">E-mail</label>
                                <input
                                    type="email"
                                    id="login-email"
                                    name="email"
                                    placeholder="seu@email.com.br"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </div>

                            <div className="form-group" style={{ position: "relative" }}>
                                <label htmlFor="login-senha">Senha</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="login-senha"
                                    name="senha"
                                    placeholder="••••••••"
                                    style={{ paddingRight: "42px" }}
                                    autoComplete="current-password"
                                    value={senha}
                                    onChange={(event) => setSenha(event.target.value)}
                                />
                                <button
                                    className="mb-toggle-senha"
                                    onClick={() => setShowPassword(!showPassword)}
                                    type="button"
                                    aria-label="Mostrar senha"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                        <circle cx="12" cy="12" r="3"/>
                                    </svg>
                                </button>
                            </div>

                            <div className="mb-login-options">
                                <label className="mb-check-label">
                                    <input
                                        type="checkbox"
                                        id="login-manter"
                                        checked={manterConectado}
                                        onChange={(event) =>
                                            setManterConectado(event.target.checked)
                                        }
                                    />
                                    Manter conectado
                                </label>
                                <a href="#" className="mb-esqueci">Esqueci a senha</a>
                            </div>

                            <button
                                className="btn-enviar"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Enviando..." : "Entrar na minha conta"}
                            </button>

                            <p className="mb-sem-conta">
                                Ainda não é associado?{" "}
                                <Link to="/cadastro">Associe-se agora</Link>
                            </p>

                            <div className="mb-seguro">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                                Conexão criptografada e protegida. Seus dados estão seguros.
                            </div>

                        </form>
                    </div>

                    <Link to="/" className="login-voltar">← Voltar para o início</Link>

                </div>
            </section>
        </main>
    );
};
