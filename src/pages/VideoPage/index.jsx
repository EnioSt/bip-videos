import { useNavigate, useParams } from "react-router-dom";
import videos from "../../data/videos.json";
import YouTubeEmbed from "../../components/YouTubeEmbed";
import VideoSugestoes from "../../components/VideoSugestoes";

const VideoPage = () => {
  const { id } = useParams();
  const video = videos.find((v) => v.id === Number(id));
  const navigate = useNavigate();

  console.log("ID da URL:", id);
  console.log("Vídeo encontrado:", video);

  if (!video) {
    return (
      <div className="text-center mt-20 text-gray-500">
        Vídeo não encontrado 😕
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <button
          className="mb-6 text-blue-600 hover:underline text-sm"
          onClick={() => navigate(-1)}
        >
          ⬅️ VOLTAR
        </button>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-6 text-center">
          {video.title}
        </h2>
        <div className="aspect-video mb-6">
          <YouTubeEmbed src={video.url} isActive={true} />
        </div>
        <p className="text-gray-700 text-center">
          Tags: {video.tags.join(", ")}
        </p>
        <VideoSugestoes atual={video} />
      </div>
    </section>
  );
};

export default VideoPage;
