import fs from "fs/promises";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config({ path: "./scripts/.env" });

const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.CHANNEL_ID;
const MAX_RESULTS = process.env.MAX_RESULTS;

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`;

function definirTags(title) {
  const lower = title.toLowerCase();
  const tags = [];

  if (lower.includes("board")) return ["menuboard"];
  if (
    lower.includes("gestor") ||
    lower.includes("módulo") ||
    lower.includes("tutorial")
  ) {
    tags.push("gestor");
  }
  if (lower.includes("pdv")) tags.push("pdv");
  if (lower.includes("portal")) tags.push("portal");

  return tags.length > 0 ? tags : ["outros"];
}

const BASE_API = "https://www.googleapis.com/youtube/v3/search";

async function fetchAllVideos() {
  let videos = [];
  let nextPageToken = "";
  let pagina = 1;

  do {
    const url = `${BASE_API}?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}${
      nextPageToken ? `&pageToken=${nextPageToken}` : ""
    }`;

    console.log(`🔄 Buscando página ${pagina}...`);
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("❌ Erro da API:", data.error.message);
      break;
    }

    const pageVideos = Array.isArray(data.items)
      ? data.items
          .filter((item) => item.id.kind === "youtube#video")
          .map((item, index) => ({
            id: videos.length + index + 1,
            title: item.snippet.title,
            url: `https://www.youtube.com/embed/${item.id.videoId}`,
            thumbnail: item.snippet.thumbnails.high.url,
            tags: definirTags(item.snippet.title),
          }))
      : [];

    videos = [...videos, ...pageVideos];
    nextPageToken = data.nextPageToken;
    pagina++;
  } while (nextPageToken);

  await fs.writeFile("./src/data/videos.json", JSON.stringify(videos, null, 2));
  console.log(
    `✅ ${videos.length} vídeos salvos com sucesso em src/data/videos.json!`
  );
}

fetchAllVideos().catch((err) => {
  console.error("❌ Erro ao buscar vídeos:", err.message);
});
