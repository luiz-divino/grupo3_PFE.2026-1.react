import "./footer.css";
import logo from "../../assets/images/logo-acb.png";
import privPdf from "/docs/politica-privacidade.pdf";
import cookiesPdf from "/docs/politica-cookies.pdf";

import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">
                    {/* Coluna 1 - Logo + descrição */}
                    <div class="footer-col">
                        <img src={logo} alt="Logo ACB" class="footer-logo" />
                        <p>
                            A ACB tem como propósito promover, fortalecer,
                            congregar e representar profissionais que atuam como
                            conselheiros nas organizações públicas e privadas.
                        </p>
                    </div>

                    {/* Coluna 2 - Institucional */}
                    <div class="footer-col">
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
                    <div class="footer-col">
                        <h3>Conteúdo</h3>
                        <ul>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/eventos">Eventos</Link>
                            </li>
                        </ul>
                        <details class="footer-lgpd">
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
                    <div class="footer-col">
                        <h3>Contato</h3>
                        <p>Rua Exemplo, 123 - São Paulo, SP</p>
                        <p>(11) 1234-5678</p>
                        <p>contato@acb.com.br</p>
                    </div>
                </div>

                {/* Linha inferior */}
                <div class="footer-bottom">
                    <p>
                        © 2024 Associação de Conselheiros do Brasil. Todos os
                        direitos reservados.
                    </p>
                    <div class="footer-links">
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
