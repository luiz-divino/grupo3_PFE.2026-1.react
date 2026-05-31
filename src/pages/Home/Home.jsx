import { Hero } from "../../components/Hero/Hero";
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
                        <a href="./views/cadastro.html" className="btn-primary">
                            Quero me associar &rarr;
                        </a>
                        <a href="./views/quemsomos.html" className="btn-secondary">
                            Conhecer a ACBrasil
                        </a>
                    </div>
                </div>
            </Hero>
            <h1>PAGINA HOME</h1>
        </main>
    );
};
