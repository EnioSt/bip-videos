const YouTubeEmbed = ({ src, thumbnail, isActive, onPlay }) => {
  return (
    <div className="aspect-video relative cursor-pointer" onClick={onPlay}>
      {isActive ? (
        <iframe
          src={src}
          title="YouTube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      ) : (
        <>
          <img
            src={thumbnail}
            alt="Prévia do vídeo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <span className="text-white text-3xl">▶</span>
          </div>
        </>
      )}
    </div>
  );
};

export default YouTubeEmbed;
