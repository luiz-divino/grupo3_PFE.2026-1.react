import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src="/images/logo-acb.png" alt="Logo ACB" className="footer-logo" />
          <p>
            A ACB tem como propósito promover, fortalecer, congregar e representar
            profissionais que atuam como conselheiros nas organizações públicas e privadas.
          </p>
        </div>

        <div className="footer-col">
          <h3>Institucional</h3>
          <Link to="/">Início</Link>
          <Link to="/quem-somos">Quem somos</Link>
          <Link to="/contato">Contato</Link>
        </div>

        <div className="footer-col">
          <h3>Conteúdo</h3>
          <Link to="/blog">Blog</Link>
          <a href="#">Eventos</a>
        </div>

        <div className="footer-col">
          <h3>Contato</h3>
          <p>Rua Exemplo, 123 - São Paulo, SP</p>
          <p>(11) 1234-5678</p>
          <p>contato@acb.com.br</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Associação de Conselheiros do Brasil. Todos os direitos reservados.</p>
        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
};
