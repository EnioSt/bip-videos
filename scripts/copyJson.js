import fs from "fs/promises";

const origem = "./output/videos.json";
const destino = "./src/data/videos.json";

async function copiarArquivo() {
  try {
    await fs.copyFile(origem, destino);
    console.log("✅ videos.json copiado para src/data com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao copiar o arquivo:", error.message);
  }
}

copiarArquivo();
