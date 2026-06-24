import { useOutletContext } from "react-router-dom";
import Paginacao from "../../../components/Paginacao";
import manuais from "../../../data/manuais.json";

const MANUAIS_POR_PAGINA = 24;

const Manuais = () => {
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
            <a
              key={manual.id}
              href={manual.arquivo}
              target="_blank"
              rel="noreferrer"
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold">{manual.titulo}</h3>
            </a>
          ))}
        </div>
      )}
      <Paginacao
        totalItens={manuaisFiltrados.length}
        itensPorPagina={MANUAIS_POR_PAGINA}
        paginaAtual={paginaAtual}
        setPaginaAtual={setPaginaAtual}
      />
    </>
  );
};

export default Manuais;
