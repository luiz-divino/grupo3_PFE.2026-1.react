import './hero.css'

export const Hero = ({ children }) => {
    return (
        <section className="hero">
            <div className="hero-content">{children}</div>
        </section>
    );
};
