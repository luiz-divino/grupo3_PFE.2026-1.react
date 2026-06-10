import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Home } from "./pages/Home/Home";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import { Fundador } from "./pages/Fundador/Fundador";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Entrar } from "./pages/Entrar/Entrar";
import { Membros } from "./pages/Membros/Membros";

export const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/fundador/:id" element={<Fundador />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/entrar" element={<Entrar />} />
                <Route path="/membros" element={<Membros />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
