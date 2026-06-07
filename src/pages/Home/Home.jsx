import { Link } from "react-router-dom";
import { Hero } from "../../components/Hero/Hero";
import moneyImage from "../../assets/images/money.jpg";
import "./home.css";

export const Home = () => {
    return (
        <main>
            <Hero>
                <div className="hero-text-container">
                    <h1>
                        ASSOCIAÇÃO DE{" "}
                        <span className="highlight">CONSELHEIROS DO BRASIL</span>
                    </h1>
                    <div className="hero-text-description">
                        <p>
                            Aliamos experiência, credibilidade e conhecimento,
                            para orientar e ajudar a construir as melhores
                            práticas de governança corporativa e otimização de
                            processos.
                        </p>
                    </div>
                    <div className="hero-buttons">
                        <Link to="/cadastro" className="btn-primary">
                            Quero me associar &rarr;
                        </Link>
                        <Link to="/quem-somos" className="btn-secondary">
                            Conhecer a ACBrasil
                        </Link>
                    </div>
                </div>
            </Hero>
            <section className="mercado-section">
                <div className="section-container">
                    <div className="indicadores-wrap">
                        <div className="indicadores-grid" id="indicadores-grid">
                            <div className="indicador-card">
                                <span className="indicador-label">POUPANÇA</span>
                                <span className="indicador-value" id="ibov-value">--</span>
                                <span className="indicador-change neutral" id="ibov-change">Carregando...</span>
                                <div className="indicador-spinner" id="ibov-spinner" role="status" aria-live="polite"
                                    aria-label="Carregando indicador POUPANÇA">
                                    <img src={moneyImage} alt="Carregando" className="indicador-spinner-image" />
                                </div>
                            </div>
                            <div className="indicador-card">
                                <span className="indicador-label">CDI</span>
                                <span className="indicador-value" id="cdi-value">--</span>
                                <span className="indicador-change neutral" id="cdi-change">Carregando...</span>
                                <div className="indicador-spinner" id="cdi-spinner" role="status" aria-live="polite"
                                    aria-label="Carregando indicador CDI">
                                    <img src={moneyImage} alt="Carregando" className="indicador-spinner-image" />
                                </div>
                            </div>
                            <div className="indicador-card">
                                <span className="indicador-label">IPCA</span>
                                <span className="indicador-value" id="ipca-value">--</span>
                                <span className="indicador-change down" id="ipca-change">Carregando...</span>
                                <div className="indicador-spinner" id="ipca-spinner" role="status" aria-live="polite"
                                    aria-label="Carregando indicador IPCA">
                                    <img src={moneyImage} alt="Carregando" className="indicador-spinner-image" />
                                </div>
                            </div>
                            <div className="indicador-card">
                                <span className="indicador-label">USD/BRL</span>
                                <span className="indicador-value" id="usdbrl-value">--</span>
                                <span className="indicador-change down" id="usdbrl-change">Carregando...</span>
                                <div className="indicador-spinner" id="usdbrl-spinner" role="status" aria-live="polite"
                                    aria-label="Carregando indicador USD/BRL">
                                    <img src={moneyImage} alt="Carregando" className="indicador-spinner-image" />
                                </div>
                            </div>
                            <div className="indicador-card">
                                <span className="indicador-label">SELIC</span>
                                <span className="indicador-value" id="selic-value">--</span>
                                <span className="indicador-change up" id="selic-change">Carregando...</span>
                                <div className="indicador-spinner" id="selic-spinner" role="status" aria-live="polite"
                                    aria-label="Carregando indicador SELIC">
                                    <img src={moneyImage} alt="Carregando" className="indicador-spinner-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="destaque-semana">
                <div className="section-container">
                    <div className="section-label">
                        <span className="label-bar"></span>
                        Webinar Destaque
                    </div>

                    <div className="destaque-grid" id="webinar-destaque">
                    </div>
                </div>
            </section>

            <section className="webinar-section">
                <div className="section-container">
                    <div className="section-label">
                        <span className="label-bar"></span>
                        Webinar &amp; Encontros
                    </div>

                    <div className="section-header-row">
                        <h2>Webinars</h2>
                        <a href="#webinar-home-grid" className="ver-todos">Ver todos &rarr;</a>
                    </div>

                    <div className="eventos-grid webinar-grid" id="webinar-home-grid">
                    </div>
                </div>
            </section>

            <section className="blog-section">
                <div className="section-container">
                    <div className="section-label">
                        <span className="label-bar"></span>
                        Blog &amp; Newsletter
                    </div>

                    <div className="section-header-row">
                        <h2>Artigos recentes</h2>
                        <Link to="/blog" className="ver-todos">Ver todos &rarr;</Link>
                    </div>

                    <div className="blog-grid" id="blog-grid">
                    </div>

                    <div className="videos-section section-container">
                        <div className="section-header-row">
                            <h2>Podcasts</h2>
                            <a href="https://youtube.com/playlist?list=PL98yzQXxvQjVDk60HdOp9dySACtnJErRO&si=ubJP88t5lplaJEAY"
                                className="ver-todos" target="_blank" rel="noopener">Ver mais &rarr;</a>
                        </div>
                        <div className="videos-grid" id="videos-grid">
                        </div>
                    </div>
                </div>
            </section>

            <section className="associe-section">
                <div className="section-container">
                    <div className="associe-grid">
                        <div className="associe-content">
                            <div className="section-label">
                                <span className="label-bar"></span>
                                Associe-se
                            </div>
                            <h2>Faça parte da ACB</h2>
                            <div className="associe-buttons">
                                <Link to="/cadastro" className="btn-primary">Quero me associar &rarr;</Link>
                                <Link to="/quem-somos" className="btn-outline-dark">Saiba mais</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};
