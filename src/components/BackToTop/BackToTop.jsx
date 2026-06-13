import "./backToTop.css";

export const BackToTop = () => {
    const handleBackToTop = () => {
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: reduceMotion ? "auto" : "smooth",
        });
    };

    return (
        <section className="back-to-top-section" aria-label="Voltar ao início">
            <button
                className="back-to-top-button"
                type="button"
                onClick={handleBackToTop}
            >
                <span className="back-to-top-icon" aria-hidden="true">
                    ↑
                </span>
                <span>Voltar ao topo</span>
            </button>
        </section>
    );
};
