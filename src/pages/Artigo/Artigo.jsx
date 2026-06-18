import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    buscarPostPorId,
    formatarDataPublicacao,
    obterCategoriasPost,
    obterImagemPost,
    obterTagPost,
    removerTagsHtml,
} from "../../infrastructure/api/blog.js";
import "../Blog/blog.css";
import "./artigo.css";
import UnderlineLink from "../../components/UnderlineLink/UnderlineLink.jsx";

export const Artigo = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        let ativo = true;

        const carregarArtigo = async () => {
            setLoading(true);
            setError("");
            setPost(null);

            try {
                const artigo = await buscarPostPorId(id);

                if (ativo) {
                    setPost(artigo);
                }
            } catch {
                if (ativo) {
                    setError(
                        "Não foi possível carregar este artigo no momento.",
                    );
                }
            } finally {
                if (ativo) {
                    setLoading(false);
                }
            }
        };

        carregarArtigo();

        return () => {
            ativo = false;
        };
    }, [id]);

    if (loading) {
        return (
            <main>
                <section className="artigo-section">
                    <div className="section-container">
                        <p className="artigo-feedback">Carregando artigo...</p>
                    </div>
                </section>
            </main>
        );
    }

    if (error || !post) {
        return (
            <main>
                <section className="artigo-section">
                    <div className="section-container">
                        <div className="artigo-feedback artigo-feedback--error">
                            <p>{error || "Artigo não encontrado."}</p>
                            <UnderlineLink
                                href="/blog"
                                className="artigo-back-link"
                                direction="right-to-left"
                            >
                                Voltar ao blog
                            </UnderlineLink>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    const titulo = removerTagsHtml(post.title?.rendered) || "Sem título";
    const data = formatarDataPublicacao(post.date);
    const tag = obterTagPost(post);
    const tagClasse = tag === "Artigo" ? "mercado" : "associacao";
    const categorias = obterCategoriasPost(post);
    const imagem = obterImagemPost(post);
    const conteudo = post.content?.rendered || "";

    return (
        <main>
            <section className="artigo-section">
                <div className="section-container">
                    <article className="artigo-detail">
                        <UnderlineLink
                            to="/blog"
                            className="artigo-back-link"
                            direction="right-to-left"
                        >
                            &larr; Voltar ao blog
                        </UnderlineLink>

                        <header className="artigo-header">
                            <span className={`blog-tag ${tagClasse}`}>
                                {tag}
                            </span>
                            <h1>{titulo}</h1>
                            <div className="artigo-meta">
                                {data ? (
                                    <time dateTime={post.date}>{data}</time>
                                ) : null}
                                {categorias.length > 0 ? (
                                    <div className="artigo-categories">
                                        {categorias.map((categoria) => (
                                            <span
                                                key={categoria}
                                                className="blog-card-category"
                                            >
                                                {categoria}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}
                            </div>
                        </header>

                        {imagem ? (
                            <figure className="artigo-cover">
                                <img src={imagem} alt={titulo} />
                            </figure>
                        ) : null}

                        <div
                            className="artigo-content"
                            dangerouslySetInnerHTML={{ __html: conteudo }}
                        />
                    </article>
                </div>
            </section>
        </main>
    );
};
