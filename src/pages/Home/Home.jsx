import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import { Hero } from "../../components/Hero/Hero";
import { Card } from "../../components/Card/Card";
import {
    getYoutubeThumbnail,
    handleYoutubeThumbnailError,
} from "../../components/Card/youtubeThumbnail";
import {
    buscarPostsDoBlog,
    separarPostsPorCategoria,
} from "../../infrastructure/api/blog.js";
import moneyImage from "../../assets/images/money.jpg";
import webinarsData from "../../data/webinars.json";
import "../Blog/blog.css";
import "./home.css";

const webinars = webinarsData.webinarYoutube ?? [];
const webinarDestaque = webinars[0];
const webinarsHome = webinars.slice(1, 4);

export const Home = () => {
    const [artigosRecentes, setArtigosRecentes] = useState([]);
    const [blogLoading, setBlogLoading] = useState(true);
    const [blogError, setBlogError] = useState("");

    useEffect(() => {
        let ativo = true;

        const carregarArtigos = async () => {
            setBlogLoading(true);
            setBlogError("");

            try {
                const posts = await buscarPostsDoBlog();

                if (!ativo) {
                    return;
                }

                const { artigos } = separarPostsPorCategoria(posts);
                setArtigosRecentes(artigos.slice(0, 3));
            } catch {
                if (ativo) {
                    setBlogError(
                        "Não foi possível carregar os artigos no momento.",
                    );
                }
            } finally {
                if (ativo) {
                    setBlogLoading(false);
                }
            }
        };

        carregarArtigos();

        return () => {
            ativo = false;
        };
    }, []);

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
                        {webinarDestaque ? (
                            <>
                                <a
                                    className="destaque-image-card webinar-featured-media"
                                    href={webinarDestaque.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Assistir ${webinarDestaque.titulo} no YouTube`}
                                >
                                    <img
                                        src={getYoutubeThumbnail(webinarDestaque.capa)}
                                        alt={`Capa do ${webinarDestaque.titulo}`}
                                        onError={(event) =>
                                            handleYoutubeThumbnailError(
                                                event,
                                                webinarDestaque.capa,
                                            )
                                        }
                                    />
                                    <span className="destaque-tag">
                                        {webinarDestaque.tag}
                                    </span>
                                    <div className="destaque-image-caption">
                                        <h3>{webinarDestaque.titulo}</h3>
                                        <p className="destaque-meta">
                                            Webinar {webinarDestaque.id}
                                        </p>
                                    </div>
                                </a>

                                <div className="destaque-content">
                                    <h2>{webinarDestaque.titulo}</h2>
                                    <p>{webinarDestaque.destaque}</p>
                                    <a
                                        href={webinarDestaque.url}
                                        className="btn-primary destaque-cta"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Assistir webinar &rarr;
                                    </a>
                                </div>
                            </>
                        ) : null}
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
                        <Link to="/webinars" className="ver-todos">Ver todos &rarr;</Link>
                    </div>

                    <div className="eventos-grid webinar-grid" id="webinar-home-grid">
                        {webinarsHome.map((webinar) => (
                            <Card key={webinar.id} webinar={webinar} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-blog-section">
                <div className="section-container">
                    <div className="section-label">
                        <span className="label-bar"></span>
                        Blog &amp; Newsletter
                    </div>

                    <div className="section-header-row">
                        <h2>Artigos recentes</h2>
                        <Link to="/blog" className="ver-todos">
                            Ver todos &rarr;
                        </Link>
                    </div>

                    <div className="blog-grid home-blog-grid" id="blog-grid">
                        {blogLoading ? (
                            <p className="blog-empty">Carregando artigos...</p>
                        ) : blogError ? (
                            <p className="blog-empty">{blogError}</p>
                        ) : artigosRecentes.length > 0 ? (
                            artigosRecentes.map((post) => (
                                <BlogCard
                                    key={post.id}
                                    post={post}
                                    showCategories={false}
                                />
                            ))
                        ) : (
                            <p className="blog-empty">
                                Nenhum artigo disponível no momento.
                            </p>
                        )}
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
