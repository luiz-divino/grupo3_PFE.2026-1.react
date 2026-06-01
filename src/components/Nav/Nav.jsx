import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-acb.png";
import "./nav.css";

export const Nav = () => {
    return (
        <>
            <header className="top-header">
                <nav className="nav-container">
                    <div className="logo">
                        <img src={logo} alt="Logo da ACB" />
                    </div>
                    {/*espaço para adicionar button menu hamburguer para telas mobile */}
                    <button
                        class="menu-toggle"
                        type="button"
                        aria-label="Abrir menu"
                        aria-expanded="false"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* menu de navegação */}
                    <ul className="menu">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/quem-somos">Quem Somos</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/membros">Membros</Link>
                        </li>
                        <li>
                            <Link to="/contato">Contato</Link>
                        </li>
                    </ul>

                    <div className="actions">
                        <span className="btn-login">
                            <Link to="/entrar">Entrar</Link>
                        </span>
                        <span className="btn-register">
                            <Link to="/cadastro">Associe-se</Link>
                        </span>
                    </div>
                </nav>
            </header>
        </>
    );
};
