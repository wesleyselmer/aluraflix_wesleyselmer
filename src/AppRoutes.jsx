import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideosProvider } from "./context/VideosContext";
import EstilosGlobais from "./components/EstilosGlobais";
import Header from "./components/Header";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import Footer from "./components/Footer";
import { ModalProvider } from "./context/ModalContext";

function AppRoutes() {
  return (
    <>
      <EstilosGlobais />
      <BrowserRouter>
        <VideosProvider>
          <ModalProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/novovideo" element={<NovoVideo />} />
            </Routes>
            <Footer />
          </ModalProvider>
        </VideosProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
