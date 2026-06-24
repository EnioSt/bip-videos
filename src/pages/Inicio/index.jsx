import { useEffect, useState } from "react";
import Tag from "../../components/Tag";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import { TAGS, TAG_COLORS } from "../../utils/tags";
import { Link, Outlet } from "react-router-dom";

const Inicio = () => {
  const [tagSelecionada, setTagSelecionada] = useState("todos");
  const [busca, setBusca] = useState("");
  const [paginaAtual, setPaginaAtual] = useState(1);

  const rotas = [
    {
      label: "Videos",
      to: "/",
    },
    {
      label: "Manuais",
      to: "/manuais",
    },
  ];

  useEffect(() => {
    setPaginaAtual(1);
  }, [tagSelecionada, busca]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaAtual]);

  return (
    <section className="bg-blue-50 w-full min-h-screen px-4 py-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Barra de busca */}
        <div className="flex items-center gap-2 max-w-md mx-auto mb-6">
          <input
            type="text"
            placeholder="Buscar..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition">
            🔍
          </button>
        </div>

        {/* Filtros por Tag */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {TAGS.map((tag) => (
            <Tag
              key={tag.value}
              isActive={tagSelecionada === tag.value}
              onClick={() => setTagSelecionada(tag.value)}>
              {tag.label}
            </Tag>
          ))}
        </div>

        {/* Abas */}
        <div className="flex justify-center gap-4 mb-6">
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
            {rotas.map((rota, index) => (
              <li key={index}>
                <Link
                  to={rota.to}
                  className="font-menu text-gray-500 text-xl hover:underline hover:text-black-900 transition-colors duration-200">
                  {rota.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Outlet
          context={{
            busca,
            tagSelecionada,
            paginaAtual,
            setPaginaAtual,
          }}
        />
      </div>
    </section>
  );
};

export default Inicio;
