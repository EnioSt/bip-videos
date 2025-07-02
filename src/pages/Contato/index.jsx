import imgFundo from "../../assets/img-page2.jpg";

const Contato = () => {
  return (
    <section
      className="bg-blue-50 bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundImage: `url(${imgFundo})` }} // substitua pelo caminho da imagem
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 text-center">
          Contato BIP360
        </h2>

        {/* Infraestrutura */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Infraestrutura
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>Serviços:</strong> Dúvidas e problemas com e-mails
            (Microsoft) gerenciados pela empresa.
          </p>
          <p className="text-gray-700 mb-1">
            <strong>WhatsApp:</strong> (17) 99791-0529
          </p>
          <p className="text-gray-700">
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:atendimentoinfraestrutura@bip360.com.br"
              className="text-blue-600 hover:underline"
            >
              atendimentoinfraestrutura@bip360.com.br
            </a>
          </p>
        </div>

        {/* Protheus */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Sistema Protheus
          </h3>
          <p className="text-gray-700 mb-1">
            <strong>WhatsApp:</strong> (17) 99791-0529
          </p>
          <p className="text-gray-700">
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:atendimentoprotheus@bip360.com.br"
              className="text-blue-600 hover:underline"
            >
              atendimentoprotheus@bip360.com.br
            </a>
          </p>
        </div>

        {/* Suporte */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Suporte</h3>
          <p className="text-gray-700 mb-1">
            <strong>Serviços:</strong> Suporte aos produtos da BIP360: PDV,
            Gestor, MenuBoard e Portal de Compras
          </p>
          <p className="text-gray-700 mb-1">
            <strong>WhatsApp:</strong> (17) 98163-0266
          </p>
          <p className="text-gray-700">
            <strong>E-mail:</strong>{" "}
            <a
              href="mailto:suporte@bip360.com.br"
              className="text-blue-600 hover:underline"
            >
              suporte@bip360.com.br
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contato;
