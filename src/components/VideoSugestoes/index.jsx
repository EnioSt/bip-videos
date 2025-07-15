import { useNavigate } from "react-router-dom";
import videos from "../../data/videos.json";
import YouTubeEmbed from "../YouTubeEmbed";

const VideoSugestoes = ({ atual }) => {
  const navigate = useNavigate();

  const recomendados = videos
    .filter(
      (v) => v.id !== atual.id && v.tags.some((tag) => atual.tags.includes(tag))
    )
    .slice(0, 3);

  if (recomendados.length === 0) return null;

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
        Vídeos recomendados
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recomendados.map((v) => (
          <div
            key={v.id}
            className="bg-blue-50 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
            onClick={() => navigate(`/video/${v.id}`)}
          >
            <div className="aspect-video">
              <YouTubeEmbed
                src={v.url}
                thumbnail={v.thumbnail}
                isActive={false}
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-medium text-gray-800">{v.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSugestoes;
