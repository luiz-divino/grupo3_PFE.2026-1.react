import "./quemSomos.css";

export const QuemSomos = () => {
    return (
        <main>
            <section className="about-section">
                <div className="hero-banner-quem-somos">
                    <div className="container-quem-somos">
                        <div className="content-wrapper">
                            <span className="badge">INSTITUCIONAL</span>
                            <h1>Quem somos e por que existimos</h1>
                            <p>
                                A ACBrasil nasceu da necessidade de uma entidade
                                forte, independente e comprometida com o
                                desenvolvimento do mercado de capitais no
                                Brasil.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mission-section">
                <div className="container">
                    <article className="mission-content">
                        <header>
                            <span className="subtitle">NOSSA MISSÃO</span>
                            <h2 className="title">
                                Fortalecer o mercado de capitais brasileiro
                                desde a raiz
                            </h2>
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
        </main>
    );
};
