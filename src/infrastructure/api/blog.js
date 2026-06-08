import { getAllPosts } from "./wordpress.js";

export const BLOG_ARTIGOS_CATEGORY_ID = 20;
export const BLOG_POSTS_PER_PAGE = 6;
const CACHE_KEY_POSTS = "acbrasil_blog_posts_cache_v2";

const isBrowser = () => typeof window !== "undefined";

const safeLocalStorage = () => {
    if (!isBrowser()) {
        return null;
    }

    try {
        return window.localStorage;
    } catch {
        return null;
    }
};

export const removerTagsHtml = (texto = "") =>
    texto.replace(/<[^>]*>/g, "").trim();

export const decodificarEntidadesHtml = (texto = "") => {
    if (!texto) {
        return "";
    }

    if (typeof DOMParser === "undefined") {
        return texto;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(texto, "text/html");
    return doc.documentElement.textContent || "";
};

export const limitarTexto = (texto = "", limite = 140) => {
    if (!texto || texto.length <= limite) {
        return texto || "";
    }

    return `${texto.slice(0, limite).trim()}...`;
};

export const normalizarTexto = (texto = "") =>
    texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

const formatadorData = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
});

export const formatarDataPublicacao = (dateString = "") => {
    const data = new Date(dateString);

    if (Number.isNaN(data.getTime())) {
        return "";
    }

    return formatadorData.format(data);
};

const lerCachePosts = () => {
    const storage = safeLocalStorage();
    if (!storage) {
        return [];
    }

    try {
        const raw = storage.getItem(CACHE_KEY_POSTS);
        if (!raw) {
            return [];
        }

        const parsed = JSON.parse(raw);
        return Array.isArray(parsed?.posts) ? parsed.posts : [];
    } catch {
        return [];
    }
};

const salvarCachePosts = (posts) => {
    const storage = safeLocalStorage();
    if (!storage) {
        return;
    }

    try {
        storage.setItem(
            CACHE_KEY_POSTS,
            JSON.stringify({
                savedAt: new Date().toISOString(),
                posts,
            }),
        );
    } catch {
        // Cache apenas otimiza a navegação; falhas não quebram a tela.
    }
};

export const ordenarPostsMaisRecentes = (posts = []) =>
    [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

export const obterImagemPost = (post) =>
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/logo-acb.png";

export const obterCategoriasPost = (post) => {
    const termosTaxonomia = post?._embedded?.["wp:term"] || [];

    return termosTaxonomia
        .flat()
        .filter((termo) => termo?.taxonomy === "category")
        .map((termo) => termo.name)
        .filter(Boolean);
};

export const isArtigoPost = (post) =>
    Boolean(post.categories?.includes(BLOG_ARTIGOS_CATEGORY_ID));

export const isNewsletterPost = (post) => !isArtigoPost(post);

export const obterTagPost = (post) =>
    isArtigoPost(post) ? "Artigo" : "Newsletter";

export const separarPostsPorCategoria = (posts = []) => ({
    artigos: ordenarPostsMaisRecentes(posts.filter(isArtigoPost)),
    newsletter: ordenarPostsMaisRecentes(posts.filter(isNewsletterPost)),
});

export const filtrarPostsPorTermo = (posts = [], termo = "") => {
    const termoNormalizado = normalizarTexto(termo);

    if (!termoNormalizado) {
        return posts;
    }

    return posts.filter((post) => {
        const titulo = normalizarTexto(removerTagsHtml(post.title?.rendered));
        const resumo = normalizarTexto(
            decodificarEntidadesHtml(removerTagsHtml(post.excerpt?.rendered)),
        );
        const categorias = normalizarTexto(obterCategoriasPost(post).join(" "));
        const tag = normalizarTexto(obterTagPost(post));

        return [titulo, resumo, categorias, tag].some((texto) =>
            texto.includes(termoNormalizado),
        );
    });
};

export const obterSugestoesBlog = (posts = []) => {
    const titulos = posts
        .map((post) => removerTagsHtml(post.title?.rendered))
        .filter(Boolean);

    const categorias = posts.flatMap((post) => obterCategoriasPost(post));

    return [...new Set([...titulos, ...categorias, "Artigos", "Newsletter"])]
        .filter(Boolean)
        .slice(0, 8);
};

export const paginarLista = (
    lista = [],
    pagina = 1,
    porPagina = BLOG_POSTS_PER_PAGE,
) => {
    const totalPaginas = Math.max(1, Math.ceil(lista.length / porPagina));
    const paginaAtual = Math.min(Math.max(1, pagina), totalPaginas);
    const inicio = (paginaAtual - 1) * porPagina;

    return {
        items: lista.slice(inicio, inicio + porPagina),
        pagina: paginaAtual,
        totalPaginas,
    };
};

export const buscarPostsDoBlog = async () => {
    const cachedPosts = lerCachePosts();
    if (cachedPosts.length) {
        return ordenarPostsMaisRecentes(cachedPosts);
    }

    const posts = await getAllPosts({ perPage: 100, embed: true });
    const ordenados = ordenarPostsMaisRecentes(posts);
    salvarCachePosts(ordenados);

    return ordenados;
};
