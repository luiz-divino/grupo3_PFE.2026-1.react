import { useState } from 'react';
import { Link } from 'react-router-dom';
import './membros.css';

export const Membros = () => {
    const [showSenha, setShowSenha] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [manterConectado, setManterConectado] = useState(false);

    const handleLogin = () => {
        if (!email.trim() || !senha.trim()) {
            alert('Preencha e-mail e senha para continuar.');
            return;
        }
        alert('Funcionalidade de login será integrada ao sistema de autenticação.');
    };

    return (
        <main>

            {/* =============================================
                HERO — LOGIN CARD CENTRALIZADO
                ============================================= */}
            <section className="mb-hero">
                <div className="section-container">
                    <div className="mb-hero-grid">

                        {/* Card de login */}
                        <div className="mb-login-card">
                            <div className="mb-login-header">
                                <div className="mb-login-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <div>
                                    <strong>Acessar minha conta</strong>
                                    <span>Área exclusiva para associados ACBrasil</span>
                                </div>
                            </div>

                            <div className="mb-login-form">
                                <div className="form-group">
                                    <label htmlFor="mb-email">E-mail</label>
                                    <input
                                        type="email"
                                        id="mb-email"
                                        placeholder="seu@email.com.br"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group" style={{ position: 'relative' }}>
                                    <label htmlFor="mb-senha">Senha</label>
                                    <input
                                        type={showSenha ? 'text' : 'password'}
                                        id="mb-senha"
                                        placeholder="••••••••"
                                        style={{ paddingRight: '42px' }}
                                        value={senha}
                                        onChange={e => setSenha(e.target.value)}
                                    />
                                    <button
                                        className="mb-toggle-senha"
                                        onClick={() => setShowSenha(prev => !prev)}
                                        type="button"
                                        aria-label="Mostrar senha"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    </button>
                                </div>

                                <div className="mb-login-options">
                                    <label className="mb-check-label">
                                        <input
                                            type="checkbox"
                                            id="mb-manter"
                                            checked={manterConectado}
                                            onChange={e => setManterConectado(e.target.checked)}
                                        />
                                        Manter conectado
                                    </label>
                                    <a href="#" className="mb-esqueci">Esqueci a senha</a>
                                </div>

                                <button className="btn-enviar" type="button" onClick={handleLogin}>
                                    Entrar na minha conta
                                </button>

                                <p className="mb-sem-conta">
                                    Ainda não é associado? <Link to="/cadastro">Associe-se agora</Link>
                                </p>

                                <div className="mb-seguro">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                    Conexão criptografada e protegida. Seus dados estão seguros.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =============================================
                CTA FINAL
                ============================================= */}
            <section className="mb-cta-section">
                <div className="section-container">
                    <h2>Pronto para entrar?</h2>
                    <p>Se você já é associado, basta fazer login acima. Se ainda não faz parte da ACBrasil, descubra como a associação pode transformar sua atuação no mercado.</p>
                    <div className="mb-cta-buttons">
                        <Link to="/cadastro" className="btn-primary">Quero me associar →</Link>
                        <Link to="/contato" className="btn-secondary">Falar com a equipe</Link>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Membros;
