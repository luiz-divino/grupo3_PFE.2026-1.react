import { Link } from "react-router-dom";
import { WebinarAvisoForm } from "../../components/Form/Form.jsx";
import { Hero } from "../../components/Hero/Hero";
import { WebinarCard } from "../../components/WebinarsCard/WebinarCard";
import webinarsData from "../../data/webinars.json";
import "./webinars.css";

const webinars = webinarsData.webinarYoutube ?? [];

export const Webinars = () => {
    return (
        <main>
            <Hero>
                <div className="webinars-hero-content">
                    <span className="webinars-badge">
                        Webinar &amp; Encontros
                    </span>
                    <h1>Webinars ACBrasil</h1>
                    <p>
                        Conteúdos e encontros para conselheiros, lideranças e
                        profissionais interessados em governança corporativa.
                    </p>
                </div>
            </Hero>

            <section className="webinars-cta-section">
                <div className="section-container">
                    <div className="webinars-final-cta">
                        <h2>Quer acompanhar os próximos encontros?</h2>
                        <div className="webinars-final-cta__actions">
                            <a
                                href="#webinar-aviso"
                                className="webinars-final-cta__primary"
                            >
                                Quero ser avisado(a) &rarr;
                            </a>
                            <Link
                                to="/contato"
                                className="webinars-final-cta__secondary"
                            >
                                Falar com a equipe
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="webinars-page-section">
                <div className="section-container">
                    <div className="section-label">
                        <span className="label-bar"></span>
                        Biblioteca de webinars
                    </div>

                    <div className="webinars-page-header">
                        <h2>Todos os webinars</h2>
                        <p>{webinars.length} conteúdos disponíveis</p>
                    </div>

                    <div className="webinars-page-grid">
                        {webinars.map((webinar) => (
                            <WebinarCard key={webinar.id} webinar={webinar} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="webinar-aviso-section" id="webinar-aviso">
                <div className="section-container">
                    <WebinarAvisoForm />
                </div>
            </section>
        </main>
    );
};

