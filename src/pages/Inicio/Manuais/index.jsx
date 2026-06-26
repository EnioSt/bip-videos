import { useOutletContext } from "react-router-dom";
import { FiExternalLink, FiX } from "react-icons/fi";
import Paginacao from "../../../components/Paginacao";
import manuais from "../../../data/manuais.json";
import { useState } from "react";

const MANUAIS_POR_PAGINA = 24;

const Manuais = () => {
  const [pdfAberto, setPdfAberto] = useState(null);

  const { busca, tagSelecionada, paginaAtual, setPaginaAtual } =
    useOutletContext();

  const manuaisFiltrados = manuais.filter((manual) => {
    const correspondeTag =
      tagSelecionada === "todos" || manual.tags.includes(tagSelecionada);

    const correspondeBusca = manual.titulo
      .toLowerCase()
      .includes(busca.toLowerCase());

    return correspondeTag && correspondeBusca;
  });

  const indiceInicial = (paginaAtual - 1) * MANUAIS_POR_PAGINA;

  const manuaisPaginados = manuaisFiltrados.slice(
    indiceInicial,
    indiceInicial + MANUAIS_POR_PAGINA,
  );

  return (
    <>
      {manuaisFiltrados.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          Nenhum manual encontrado 😕
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {manuaisPaginados.map((manual) => (
            <button
              key={manual.id}
              onClick={() => setPdfAberto(manual)}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3>{manual.titulo}</h3>
            </button>
          ))}
        </div>
      )}

      <Paginacao
        totalItens={manuaisFiltrados.length}
        itensPorPagina={MANUAIS_POR_PAGINA}
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />
      {pdfAberto && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
          <div className="bg-white w-[95vw] h-[95vh] rounded-lg overflow-hidden flex flex-col">
            {/* Barra superior */}
            <div className="flex items-center justify-between px-4 py-2 border-b bg-gray-50">
              <span className="text-sm font-medium text-gray-700 truncate">
                {pdfAberto.titulo}
              </span>

              <div className="flex items-center gap-2">
                <a
                  href={pdfAberto.arquivo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1 text-sm text-blue-600 hover:bg-blue-50 rounded">
                  <FiExternalLink />
                  Abrir
                </a>

                <button
                  onClick={() => setPdfAberto(null)}
                  className="flex items-center gap-1 px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded">
                  <FiX />
                  Fechar
                </button>
              </div>
            </div>

            {/* PDF */}
            <iframe
              src={pdfAberto.arquivo}
              title={pdfAberto.titulo}
              className="flex-1 w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Manuais;
