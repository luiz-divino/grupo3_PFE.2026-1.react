import "./hero.css";

export const Hero = ({ children, banner }) => {
    const heroStyle = banner
        ? {
              backgroundImage: `url(${banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
          }
        : undefined;

    return (
        <section className="hero" style={heroStyle}>
            <div className="hero-overlay" aria-hidden="true" />
            <div className="hero-content">{children}</div>
        </section>
    );
};
