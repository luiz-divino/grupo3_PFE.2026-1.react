import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav/Nav.jsx";
import { Home } from "./pages/Home/Home";
import { QuemSomos } from "./pages/QuemSomos/QuemSomos";
import { Blog } from "./pages/Blog/Blog";
import { Contato } from "./pages/Contato/Contato";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Footer } from "./components/Footer/Footer.jsx";

export const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<QuemSomos />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};
