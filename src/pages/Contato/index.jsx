import imgFundo from "../../assets/img-page2.jpg";
import InfoContato from "../../components/InfoContato";

const Contato = () => {
  return (
    <section
      className="bg-blue-50 bg-cover bg-center min-h-screen flex items-center justify-center px-6 py-16"
      style={{ backgroundImage: `url(${imgFundo})` }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-8 text-center">
          Contato BIP360
        </h2>

        {/* Infraestrutura */}
        <InfoContato
          nome="Infraestrutura"
          servicos="Dúvidas e problemas com e-mails
            (Microsoft) gerenciados pela empresa."
          whatsapp="(17) 99791-0529"
          href="mailto:atendimentoinfraestrutura@bip360.com.br"
          email="atendimentoinfraestrutura@bip360.com.br"
        />

        {/* Protheus */}
        <InfoContato
          nome="Sistema Protheus"
          servicos="Suporte relacionado ao sistema protheus utilizado internamente na empresa."
          whatsapp=" (17) 99791-0529"
          href="mailto:atendimentoprotheus@bip360.com.br"
          email="atendimentoprotheus@bip360.com.br"
        />

        {/* Suporte */}
        <InfoContato
          nome="Suporte Bip360"
          servicos=" Suporte aos produtos da BIP360: PDV,
            Gestor, MenuBoard e Portal de Compras"
          whatsapp=" (17) 98163-0266"
          href="mailto:suporte@bip360.com.br"
          email="suporte@bip360.com.br"
        />

        {/* Comercial */}
        <InfoContato
          nome="Comercial"
          servicos="Negociação e esclarecimentos de dúvidas, de empresas interessadas nos sistemas oferecidos pela Bip360"
          whatsapp="(17) 98163-0490"
          href="mailto:comercial@bip360.com.br"
          email="comercial@bip360.com.br"
        />
      </div>
    </section>
  );
};

export default Contato;
