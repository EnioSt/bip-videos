import { useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import videos from "../../../data/videos.json";
import perfil from "../../../assets/modelo2_360.png";
import YouTubeEmbed from "../../../components/YouTubeEmbed";
import { TAG_COLORS, formatarTag } from "../../../utils/tags";
import Paginacao from "../../../components/Paginacao";

const VIDEOS_POR_PAGINA = 12;

const MiniTag = ({ tag }) => (
  <span
    className={`px-2 py-1 text-xs rounded-full font-medium ${
      TAG_COLORS[tag] || "bg-gray-100 text-gray-700"
    }`}>
    {formatarTag(tag)}
  </span>
);

const Videos = () => {
  const navigate = useNavigate();

  const { busca, tagSelecionada, paginaAtual, setPaginaAtual } =
    useOutletContext();

  const videosFiltrados = videos.filter((video) => {
    const correspondeTag =
      tagSelecionada === "todos" ||
      (Array.isArray(video.tags) && video.tags.includes(tagSelecionada));

    const correspondeBusca = video.title
      .toLowerCase()
      .includes(busca.toLowerCase());

    return correspondeTag && correspondeBusca;
  });

  const indiceInicial = (paginaAtual - 1) * VIDEOS_POR_PAGINA;
  const indiceFinal = indiceInicial + VIDEOS_POR_PAGINA;

  const videosPaginados = videosFiltrados.slice(indiceInicial, indiceFinal);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaAtual]);

  return (
    <>
      {videosFiltrados.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          Nenhum vídeo encontrado 😕
        </div>
      ) : (
        <>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {videosPaginados.map((video) => (
              <div
                key={video.id}
                className="flex flex-col bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-video">
                  <YouTubeEmbed
                    src={video.url}
                    thumbnail={video.thumbnail}
                    isActive={false}
                    onPlay={() => navigate(`/video/${video.id}`)}
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
                      {video.tags.map((tag, index) => (
                        <MiniTag key={`${video.id}-${index}`} tag={tag} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Paginação */}
          <Paginacao
            totalItens={videosFiltrados.length}
            itensPorPagina={VIDEOS_POR_PAGINA}
            paginaAtual={paginaAtual}
            setPaginaAtual={setPaginaAtual}
          />
        </>
      )}
    </>
  );
};

export default Videos;
