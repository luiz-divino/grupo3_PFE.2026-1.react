import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const logo = "/images/logo-acb.png";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen]);

    const toggleMenu = () => setIsOpen((open) => !open);
    const closeMenu = () => setIsOpen(false);
    const handleLogoClick = () => {
        closeMenu();
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    return (
        <header className="top-header">
            <nav className={`nav-container${isOpen ? " nav-open" : ""}`}>
                <Link
                    className="logo"
                    to="/"
                    aria-label="Ir para o início"
                    onClick={handleLogoClick}
                >
                    <img src={logo} alt="Associação de Conselheiros do Brasil" />
                </Link>

                <button
                    className="menu-toggle"
                    type="button"
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                    aria-controls="main-nav-menu"
                    onClick={toggleMenu}
                >
                    <span />
                    <span />
                    <span />
                </button>

                <ul className="menu" id="main-nav-menu" onClick={closeMenu}>
                    <li>
                        <Link to="/">Início</Link>
                    </li>
                    <li>
                        <Link to="/quem-somos">Quem Somos</Link>
                    </li>
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>

                <div className="actions" onClick={closeMenu}>
                    <span className="btn-login">
                        <Link to="/entrar">Entrar</Link>
                    </span>
                    <span className="btn-register">
                        <Link to="/cadastro">Associe-se</Link>
                    </span>
                </div>
            </nav>
        </header>
    );
};
