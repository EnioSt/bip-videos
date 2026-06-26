import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Contato from "./pages/Contato";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp/whatsapp";
import VideoPage from "./pages/VideoPage";
import Videos from "./pages/Inicio/Videos";
import Manuais from "./pages/Inicio/Manuais";

function AppRouter() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="bg-blue-50 flex-grow">
        <Menu />
        <Routes>
          <Route path="/" element={<Banner />}>
            <Route element={<Inicio />}>
              <Route index element={<Videos />} />
              <Route path="manuais" element={<Manuais />} />
            </Route>
            <Route path="contato" element={<Contato />} />
            <Route path="sobre" element={<Sobre />} />
          </Route>
          <Route path="video/:id" element={<VideoPage />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </main>
    </div>
  );
}

export default AppRouter;
