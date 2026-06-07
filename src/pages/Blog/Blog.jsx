import { Hero } from "../../components/Hero/Hero";
import "./blog.css";

export const Blog = () => {
    return (
        <main>
            <Hero>
                <div className="content-wrapper">
                    <span className="badge">INSTITUCIONAL</span>
                    <h1>Conteúdo Institucional e Análises Estratégicas</h1>
                    <p style={{ color: "#ffcc00" }}>
                        Publicações que reúnem posicionamentos institucionais,
                        atualizações estratégicas para conselheiros, associados
                        e lideranças.
                    </p>
                </div>
            </Hero>
            <section className="blog-section">
                <div className="section-container">
                    <div className="section-label">
                        <span className="label-bar"></span>
                        Blog &amp; Newsletter
                    </div>

                    <div className="blog-gallery-block">
                        <div className="section-header-row">
                            <h2>Artigos</h2>
                            <div className="blog-search-wrap">
                                <label
                                    className="blog-search-label"
                                    htmlFor="blog-search-artigos"
                                >
                                    Buscar artigos
                                </label>
                                <input
                                    id="blog-search-artigos"
                                    className="blog-search-input"
                                    type="search"
                                    list="blog-search-artigos-suggestions"
                                    placeholder="Título ou categoria"
                                    autoComplete="off"
                                />
                                <datalist id="blog-search-artigos-suggestions"></datalist>
                            </div>
                        </div>
                        <div className="blog-grid" id="blog-grid-artigos"></div>
                        <nav
                            className="blog-pagination"
                            id="blog-pagination-artigos"
                            aria-label="Paginação de artigos"
                        ></nav>
                    </div>

                    <div className="blog-gallery-block blog-gallery-block-newsletter">
                        <div className="section-header-row">
                            <h2>Newsletter</h2>
                            <div className="blog-search-wrap">
                                <label
                                    className="blog-search-label"
                                    htmlFor="blog-search-newsletter"
                                >
                                    Buscar newsletters
                                </label>
                                <input
                                    id="blog-search-newsletter"
                                    className="blog-search-input"
                                    type="search"
                                    list="blog-search-newsletter-suggestions"
                                    placeholder="Título ou categoria"
                                    autoComplete="off"
                                />
                                <datalist id="blog-search-newsletter-suggestions"></datalist>
                            </div>
                        </div>
                        <div
                            className="blog-grid"
                            id="blog-grid-newsletter"
                        ></div>
                        <nav
                            className="blog-pagination"
                            id="blog-pagination-newsletter"
                            aria-label="Paginação de newsletters"
                        ></nav>
                    </div>
                </div>
            </section>
        </main>
    );
};
