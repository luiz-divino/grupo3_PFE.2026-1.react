import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_acbrasil.png";

export const Nav = () => {
  return (
    <header className="top-header">
      <nav className="nav-container">
        <div className="logo">
          <img src={logo} alt="Logo da ACB" />
        </div>

        <ul className="menu">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/quem-somos">Quem somos</Link>
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
      </nav>
    </header>
  );
};