import './hero.css'

export const Hero = ({ children }) => {
    return (
        <section class="hero">
            <div class="hero-content">{children}</div>
        </section>
    );
};
