import { useState } from "react";
import videos from "../../data/videos.json";
import perfil from "../../assets/modelo2_360.png";
import Tag from "../../components/Tag";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import { TAGS, TAG_COLORS, formatarTag } from "../../utils/tags";

const MiniTag = ({ tag }) => (
  <span
    className={`px-2 py-1 text-xs rounded-full font-medium ${
      TAG_COLORS[tag] || "bg-gray-100 text-gray-700"
    }`}
  >
    {formatarTag(tag)}
  </span>
);

const Inicio = () => {
  const [tagSelecionada, setTagSelecionada] = useState("todos");
  const [busca, setBusca] = useState("");
  const [videoAtivo, setVideoAtivo] = useState(null);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const VÍDEOS_POR_PAGINA = 12;

  const videosFiltrados = videos.filter((video) => {
    const correspondeTag =
      tagSelecionada === "todos" ||
      (Array.isArray(video.tags) && video.tags.includes(tagSelecionada));

    const correspondeBusca = video.title
      .toLowerCase()
      .includes(busca.toLowerCase());

    return correspondeTag && correspondeBusca;
  });
  const indiceInicial = (paginaAtual - 1) * VÍDEOS_POR_PAGINA;
  const indiceFinal = indiceInicial + VÍDEOS_POR_PAGINA;
  const videosPaginados = videosFiltrados.slice(indiceInicial, indiceFinal);

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
              onClick={() => setTagSelecionada(tag.value)}
            >
              {tag.label}
            </Tag>
          ))}
        </div>

        {/* Lista de vídeos */}
        {videosFiltrados.length === 0 ? (
          <div className="text-center text-gray-500 text-lg mt-10">
            Nenhum vídeo encontrado 😕
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videosPaginados.map((video) => (
              <div
                key={video.id}
                className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="aspect-video">
                  <YouTubeEmbed
                    src={video.url}
                    thumbnail={video.thumbnail}
                    isActive={videoAtivo === video.id}
                    onPlay={() => setVideoAtivo(video.id)}
                  />
                </div>

                <div className="flex items-start gap-4 p-4">
                  <img
                    src={perfil}
                    alt="imagem de perfil"
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <p className="text-base font-medium text-gray-800 leading-snug">
                      {video.title}
                    </p>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {video.tags.map((tag, i) => (
                        <MiniTag key={i} tag={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/*Div de numeração de pagina*/}
        <div className="flex justify-center mt-8 gap-2 overflow-x-auto">
          <div className="flex gap-2 min-w-fit">
            {Array.from(
              {
                length: Math.ceil(videosFiltrados.length / VÍDEOS_POR_PAGINA),
              },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setPaginaAtual(i + 1)}
                  className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
                    paginaAtual === i + 1
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-white border-gray-300 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
