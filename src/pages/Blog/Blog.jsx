import { useEffect, useMemo, useState } from "react";
import banner from "../../assets/images/backgrounds/fundo-zul.jpg";
import { BlogCard } from "../../components/BlogCard/BlogCard";
import { Hero } from "../../components/Hero/Hero";
import {
    BLOG_POSTS_PER_PAGE,
    buscarPostsDoBlog,
    filtrarPostsPorTermo,
    obterSugestoesBlog,
    paginarLista,
    separarPostsPorCategoria,
} from "../../infrastructure/api/blog.js";
import "./blog.css";

const BlogGallery = ({
    title,
    searchLabel,
    searchValue,
    onSearchChange,
    suggestions,
    posts,
    currentPage,
    onPageChange,
    loading,
    error,
    emptyMessage,
    suggestionsId,
    paginationLabel,
}) => {
    const paginacao = paginarLista(posts, currentPage, BLOG_POSTS_PER_PAGE);

    return (
        <div className="blog-gallery-block">
            <div className="section-header-row">
                <h2>{title}</h2>
                <div className="blog-search-wrap">
                    <label
                        className="blog-search-label"
                        htmlFor={suggestionsId}
                    >
                        {searchLabel}
                    </label>
                    <input
                        id={suggestionsId}
                        className="blog-search-input"
                        type="search"
                        list={`${suggestionsId}-options`}
                        placeholder="Título ou categoria"
                        autoComplete="off"
                        value={searchValue}
                        onChange={(event) => onSearchChange(event.target.value)}
                    />
                    <datalist id={`${suggestionsId}-options`}>
                        {suggestions.map((option) => (
                            <option key={option} value={option} />
                        ))}
                    </datalist>
                </div>
            </div>

            {loading ? (
                <p className="blog-empty">
                    Carregando {title.toLowerCase()}...
                </p>
            ) : error ? (
                <p className="blog-empty">{error}</p>
            ) : paginacao.items.length > 0 ? (
                <>
                    <div className="blog-grid">
                        {paginacao.items.map((post) => (
                            <BlogCard key={post.id} post={post} />
                        ))}
                    </div>
                    {paginacao.totalPaginas > 1 ? (
                        <nav
                            className="blog-pagination"
                            aria-label={paginationLabel}
                        >
                            <button
                                type="button"
                                onClick={() =>
                                    onPageChange(
                                        Math.max(1, paginacao.pagina - 1),
                                    )
                                }
                                disabled={paginacao.pagina <= 1}
                            >
                                Anterior
                            </button>
                            <span className="blog-pagination-info">
                                Página {paginacao.pagina} de{" "}
                                {paginacao.totalPaginas}
                            </span>
                            <button
                                type="button"
                                onClick={() =>
                                    onPageChange(
                                        Math.min(
                                            paginacao.totalPaginas,
                                            paginacao.pagina + 1,
                                        ),
                                    )
                                }
                                disabled={
                                    paginacao.pagina >= paginacao.totalPaginas
                                }
                            >
                                Próximo
                            </button>
                        </nav>
                    ) : null}
                </>
            ) : (
                <p className="blog-empty">{emptyMessage}</p>
            )}
        </div>
    );
};

export const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [termoArtigos, setTermoArtigos] = useState("");
    const [termoNewsletter, setTermoNewsletter] = useState("");
    const [paginaArtigos, setPaginaArtigos] = useState(1);
    const [paginaNewsletter, setPaginaNewsletter] = useState(1);

    const handleTermoArtigosChange = (value) => {
        setTermoArtigos(value);
        setPaginaArtigos(1);
    };

    const handleTermoNewsletterChange = (value) => {
        setTermoNewsletter(value);
        setPaginaNewsletter(1);
    };

    useEffect(() => {
        let ativo = true;

        const carregar = async () => {
            setLoading(true);
            setError("");

            try {
                const postsCarregados = await buscarPostsDoBlog();

                if (!ativo) {
                    return;
                }

                setPosts(postsCarregados);
            } catch {
                if (ativo) {
                    setError(
                        "Não foi possível carregar os posts do blog no momento.",
                    );
                }
            } finally {
                if (ativo) {
                    setLoading(false);
                }
            }
        };

        carregar();

        return () => {
            ativo = false;
        };
    }, []);

    const { artigos, newsletter } = useMemo(
        () => separarPostsPorCategoria(posts),
        [posts],
    );

    const artigosFiltrados = useMemo(
        () => filtrarPostsPorTermo(artigos, termoArtigos),
        [artigos, termoArtigos],
    );
    const newsletterFiltrados = useMemo(
        () => filtrarPostsPorTermo(newsletter, termoNewsletter),
        [newsletter, termoNewsletter],
    );

    const sugestoesArtigos = useMemo(
        () => obterSugestoesBlog(artigos),
        [artigos],
    );
    const sugestoesNewsletter = useMemo(
        () => obterSugestoesBlog(newsletter),
        [newsletter],
    );

    return (
        <main>
            <Hero banner={banner}>
                <div className="blog-hero-content">
                    <span className="blog-badge">INSTITUCIONAL</span>
                    <h1>Conteúdo Institucional e Análises Estratégicas</h1>
                    <p className="blog-hero-copy">
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

                    <div className="blog-gallery-grid">
                        <BlogGallery
                            title="Artigos"
                            searchLabel="Buscar artigos"
                            searchValue={termoArtigos}
                            onSearchChange={handleTermoArtigosChange}
                            suggestions={sugestoesArtigos}
                            posts={artigosFiltrados}
                            currentPage={paginaArtigos}
                            onPageChange={setPaginaArtigos}
                            loading={loading}
                            error={error}
                            emptyMessage="Nenhum artigo encontrado para esse filtro."
                            suggestionsId="blog-search-artigos"
                            paginationLabel="Paginação de artigos"
                        />

                        <BlogGallery
                            title="Newsletter"
                            searchLabel="Buscar newsletters"
                            searchValue={termoNewsletter}
                            onSearchChange={handleTermoNewsletterChange}
                            suggestions={sugestoesNewsletter}
                            posts={newsletterFiltrados}
                            currentPage={paginaNewsletter}
                            onPageChange={setPaginaNewsletter}
                            loading={loading}
                            error={error}
                            emptyMessage="Nenhuma newsletter encontrada para esse filtro."
                            suggestionsId="blog-search-newsletter"
                            paginationLabel="Paginação de newsletters"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
};
