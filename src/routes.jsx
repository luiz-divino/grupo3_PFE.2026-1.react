import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { BackToTop } from "./components/BackToTop/BackToTop.jsx";
import { Nav } from "./components/Nav/Nav.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./pages/Home/Home";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import { Fundador } from "./pages/Fundador/Fundador";
import { Artigo } from "./pages/Artigo/Artigo";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Entrar } from "./pages/Entrar/Entrar";
import { Webinars } from "./pages/Webinars/Webinars";

const ScrollToTop = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            window.requestAnimationFrame(() => {
                const target = document.getElementById(
                    decodeURIComponent(hash.slice(1)),
                );

                if (target) {
                    target.scrollIntoView({ block: "start", behavior: "auto" });
                }
            });
            return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, [hash, pathname]);

    return null;
};

export const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/fundador/:id" element={<Fundador />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/artigo/:id" element={<Artigo />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/entrar" element={<Entrar />} />
                <Route path="/webinars" element={<Webinars />} />
            </Routes>
            <BackToTop />
            <Footer />
        </BrowserRouter>
    );
};
