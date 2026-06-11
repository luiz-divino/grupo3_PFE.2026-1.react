import "./footer.css";
import logo from "../../assets/images/logo-acb.png";
import privPdf from "/docs/politica-privacidade.pdf";
import cookiesPdf from "/docs/politica-cookies.pdf";

import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    {/* Coluna 1 - Logo + descrição */}
                    <div className="footer-col">
                        <img
                            src={logo}
                            alt="Logo ACB"
                            className="footer-logo"
                        />
                        <p>
                            A ACB tem como propósito promover, fortalecer,
                            congregar e representar profissionais que atuam como
                            conselheiros nas organizações públicas e privadas.
                        </p>
                    </div>

                    {/* Coluna 2 - Institucional */}
                    <div className="footer-col">
                        <h3>Institucional</h3>
                        <ul>
                            <li>
                                <Link to="/">Inicio</Link>
                            </li>
                            <li>
                                <Link to="/quem-somos">Quem Somos</Link>
                            </li>
                            <li>
                                <Link to="/contato">Contato</Link>
                            </li>
                            <li>
                                <Link to="/cadastro">Cadastro</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3 - Conteúdo */}
                    <div className="footer-col">
                        <h3>Conteúdo</h3>
                        <ul>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/eventos">Eventos</Link>
                            </li>
                        </ul>
                        <details className="footer-lgpd">
                            <summary>LGPD</summary>
                            <a
                                href={privPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Política de Privacidade
                            </a>
                            <a
                                href={cookiesPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Política de Cookies
                            </a>
                        </details>
                    </div>

                    {/* Coluna 4 - Contato */}
                    <div className="footer-col">
                        <h3>Contato</h3>
                        <p>Rua Exemplo, 123 - São Paulo, SP</p>
                        <p>(11) 99719-5099</p>
                        <p>contato@acb.com.br</p>
                    </div>
                </div>

                {/* Linha inferior */}
                <div className="footer-bottom">
                    <p>
                        © 2024 Associação de Conselheiros do Brasil. Todos os
                        direitos reservados.
                    </p>
                    <div className="footer-links">
                        <a
                            href={privPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Política de Privacidade
                        </a>
                        <a
                            href={cookiesPdf}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Política de Cookies
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
};
