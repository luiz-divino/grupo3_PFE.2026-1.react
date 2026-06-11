import {
    decodificarEntidadesHtml,
    formatarDataPublicacao,
    limitarTexto,
    obterCategoriasPost,
    obterImagemPost,
    obterTagPost,
    removerTagsHtml,
} from "../../infrastructure/api/blog.js";

export const BlogCard = ({ post, showCategories = true }) => {
    const titulo = removerTagsHtml(post.title?.rendered) || "Sem título";
    const resumo = limitarTexto(
        decodificarEntidadesHtml(removerTagsHtml(post.excerpt?.rendered)),
        160,
    );
    const imagem = obterImagemPost(post);
    const data = formatarDataPublicacao(post.date);
    const tag = obterTagPost(post);
    const tagClasse = tag === "Artigo" ? "mercado" : "associacao";
    const categorias = obterCategoriasPost(post);
    const url = post.link || "#";

    return (
        <article className="blog-card">
            <a
                className="blog-card-link"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <div className="blog-card-img">
                    <img src={imagem} alt={titulo} loading="lazy" />
                </div>
                <div className="blog-card-body">
                    <span className={`blog-tag ${tagClasse}`}>{tag}</span>
                    <h3>{titulo}</h3>
                    <p>
                        {resumo || "Leia o conteúdo completo no site da ACB."}
                    </p>
                    {showCategories && categorias.length > 0 ? (
                        <div className="blog-card-categories">
                            {categorias.slice(0, 2).map((categoria) => (
                                <span
                                    key={categoria}
                                    className="blog-card-category"
                                >
                                    {categoria}
                                </span>
                            ))}
                        </div>
                    ) : null}
                    <div className="blog-card-footer">
                        <span className="blog-date">{data}</span>
                        <span className="ler-mais">Ler mais &rarr;</span>
                    </div>
                </div>
            </a>
        </article>
    );
};
