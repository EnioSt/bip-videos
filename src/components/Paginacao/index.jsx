const Paginacao = ({
  totalItens,
  itensPorPagina,
  paginaAtual,
  setPaginaAtual,
}) => {
  const totalPaginas = Math.ceil(totalItens / itensPorPagina);

  if (totalPaginas <= 1) return null;

  return (
    <div className="flex justify-center mt-8 gap-2 overflow-x-auto">
      <div className="flex gap-2 min-w-fit">
        {Array.from({ length: totalPaginas }, (_, i) => (
          <button
            key={i}
            onClick={() => setPaginaAtual(i + 1)}
            className={`px-3 py-1 rounded-full text-sm font-medium border transition ${
              paginaAtual === i + 1
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}>
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Paginacao;
