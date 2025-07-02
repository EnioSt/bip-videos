import imagemPage from "../../assets/img-page.jpg";

const Sobre = () => {
  return (
    <section className="bg-blue-50 min-h-[80vh] pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
            BIP360 Sistemas
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            A <span className="font-semibold">BIP360</span> iniciou sua
            trajetória em 2015, sob o nome{" "}
            <span className="font-semibold">ITF</span>, com o propósito de levar
            para o mercado as soluções que desenvolveu, inicialmente, para
            atender as demandas de tecnologia do{" "}
            <span className="font-semibold">Grupo CHQ</span>, detentor da marca
            Chiquinho Sorvetes.
            <br />
            <br />
            Com o êxito obtido nesse desafio, a empresa foi rebatizada de{" "}
            <span className="font-semibold">Apte</span>, oferecendo sistemas
            completos especializados em redes de food service, sempre com
            soluções voltadas para a eficácia dos negócios atendidos.
            <br />
            <br />
            Em 2025, a Apte evoluiu e se apresentou ao mercado como{" "}
            <span className="text-blue-600 font-semibold">BIP360</span> — uma
            marca que traduz o momento de amadurecimento e transformação da
            empresa. Mais do que uma mudança de nome, representa uma nova era:
            com sistemas modernos, completos e integrados, desenvolvidos para
            acompanhar o ritmo acelerado das redes e franquias em crescimento.
            <br />
            <br />A <span className="font-semibold">BIP360</span> representa um
            compromisso com a inovação contínua e a entrega de uma experiência
            tecnológica que conecta todos os pontos da operação{" "}
            <span className="italic">(em um bip)</span>, com fluidez,
            inteligência e foco na expansão estruturada das redes.
          </p>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={imagemPage} // substitua pelo caminho correto da imagem ou ilustração
            alt="Logo BIP360"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Sobre;
