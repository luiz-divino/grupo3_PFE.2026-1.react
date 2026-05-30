import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <header className="top-header">
                <nav className="nav-container">
                    <div className="logo">
                        <img src="#" alt="Logo da ACB" />
                    </div>
                </nav>
                {/*espaço para adicionar button menu hamburguer para telas mobile */}

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
                    <button className="btn-login">
                        <Link to="/login">Entrar</Link>
                    </button>
                    <button className="btn-register">
                        <Link to="/cadastro">Associe-se</Link>
                    </button>
                </div>
            </header>
        </>
    );
};
