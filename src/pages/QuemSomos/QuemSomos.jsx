import "./quemSomos.css";
import associados from "../../data/associados.json";
import { Hero } from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import banner from "../../assets/images/fundo-hero-quem-somos.jpg";

const truncate = (text, limit) => {
    if (!text || text.length <= limit) return text;
    return text.slice(0, limit).trim().replace(/\s+\S*$/, '') + '...';
};

export const QuemSomos = () => {
    return (
        <main>
            <Hero banner={banner}>
                <div className="content-wrapper">
                    <span className="badge">INSTITUCIONAL</span>
                    <h1>Quem somos e por que existimos</h1>
                    <p style={{ color: '#ffffff' }}>
                        A ACB nasceu para disseminar a cultura da governança corporativa e apoiar a evolução das empresas brasileiras. Por meio da educação, do compartilhamento de conhecimento e das melhores práticas de gestão, contribuímos para organizações mais sólidas, transparentes e preparadas para crescer de forma sustentável.
                    </p>
                </div>
            </Hero>

            {/* =============================================
                NOSSA HISTÓRIA
                ============================================= */}
            <section className="mission-section">
                <div className="container">
                    <article className="mission-content">
                        <header>
                            <span className="subtitle">NOSSA HISTÓRIA</span>
                        </header>
                        <div className="description">
                            <p>
                                Fundada em 2022, a Associação de Conselheiros do
                                Brasil – ACB – nasce com intuito de despertar a
                                consciência sobre a importância e a necessidade
                                da adoção da governança, influenciando e
                                transformando positivamente a realidade das
                                empresas brasileiras, em especial as PMEs.
                                Aliamos experiência, credibilidade e
                                conhecimento, para orientar e ajudar a construir
                                as melhores práticas de governança corporativa e
                                otimização de processos.
                            </p>
                            <p>
                                Acreditamos que disseminar o conhecimento,
                                educar e incluir as PMEs no universo da
                                governança corporativa, é o caminho para o
                                desenvolvimento e crescimento forte e
                                sustentável do mercado brasileiro.
                            </p>
                        </div>
                    </article>
                    <div className="mission-image">
                        <img
                            src="/images/reuniao-quem-somos.jpg"
                            alt="Equipe da ACBrasil reunida em uma sala de conferências discutindo dados em uma tela."
                        />
                    </div>
                </div>
            </section>

            {/* =============================================
                O QUE FAZEMOS — PILARES
                ============================================= */}
            <section className="pilares-section">
                <div className="pilares-container">
                    <div className="pilares-header">
                        <h2 className="title">O que fazemos?</h2>
                        <div className="pilares-intro">
                            <p>
                                Nós da Associação de Conselheiros do Brasil (ACB) temos um corpo de executivos com larga
                                experiência e com reputação para implementar ou desenvolver conselhos corporativos.
                            </p>
                            <p>
                                Também auxiliamos empresas, conselhos e comitês executivos na implementação de boards, no
                                desenvolvimento e desdobramento de estratégia e em temas mais específicos, como:
                            </p>
                        </div>
                        <ul className="pilares-list" aria-label="Temas de atuação da ACB">
                            <li>Internacionalização</li>
                            <li>Digitalização</li>
                            <li>Fusões e aquisições</li>
                            <li>Cultura organizacional</li>
                            <li>Liderança</li>
                            <li>Sucessão</li>
                            <li>Sustentabilidade</li>
                            <li>Logística</li>
                            <li>Diversidade</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* =============================================
                ASSOCIADOS FUNDADORES
                ============================================= */}
            <section className="fundadores-section" id="fundadores">
                <div className="fundadores-shell">
                    <div className="fundadores-header">
                        <span className="fundadores-badge">ASSOCIADOS FUNDADORES</span>
                        <p>Conheça os associados fundadores e suas trajetórias</p>
                    </div>
                    <div className="fundadores-grid">
                        {associados.map((associado) => (
                            <div key={associado.id} className="fundador-card">
                                <div className="fundador-card__media">
                                    <img src={associado.foto} alt="" />
                                </div>
                                <div className="fundador-card__body">
                                    <h3 className="fundador-card__name">{associado.nome}</h3>
                                    <p className="fundador-card__excerpt">{truncate(associado.descricao, 165)}</p>
                                    <div className="fundador-card__footer">
                                        <Link
                                            to={`/fundador/${associado.id}`}
                                            className="fundador-card__link"
                                        >
                                            ver mais
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =============================================
                REDES SOCIAIS
                ============================================= */}
            <section className="social-section" aria-labelledby="social-section-title">
                <div className="social-shell">
                    <div className="social-header">
                        <span className="social-badge">VEJA MAIS SOBRE NÓS</span>
                        <h2 id="social-section-title">Nos acompanhe nas redes sociais</h2>
                        <p>
                            Fique por dentro das novidades, conteúdos e atualizações da ACBrasil nos nossos canais oficiais.
                        </p>
                    </div>

                    <div className="social-grid">
                        <a
                            className="social-card social-card--linkedin"
                            href="https://www.linkedin.com/company/associacao-de-conselheiros-do-brasil/"
                            target="_blank"
                            rel="noopener"
                        >
                            <span className="social-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </span>
                            <span className="social-name">LinkedIn</span>
                            <span className="social-handle">associacao de conselheiros do brasil</span>
                        </a>

                        <a
                            className="social-card social-card--youtube"
                            href="https://www.youtube.com/@acbrasil"
                            target="_blank"
                            rel="noopener"
                        >
                            <span className="social-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                                </svg>
                            </span>
                            <span className="social-name">YouTube</span>
                            <span className="social-handle">@acbrasil</span>
                        </a>

                        <a
                            className="social-card social-card--instagram"
                            href="https://www.instagram.com/acbrasil.oficial/"
                            target="_blank"
                            rel="noopener"
                        >
                            <span className="social-icon" aria-hidden="true">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </span>
                            <span className="social-name">Instagram</span>
                            <span className="social-handle">@acbrasil.oficial</span>
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default QuemSomos;
