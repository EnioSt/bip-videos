const InfoContato = ({ nome, servicos, whatsapp, email, href }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{nome}</h3>
      <p className="text-gray-700 mb-1">
        <strong>Serviços:</strong> {servicos}
      </p>
      <p className="text-gray-700 mb-1">
        <strong>WhatsApp:</strong> {whatsapp}
      </p>
      <p className="flex items-center text-gray-700 flex-wrap gap-1">
        <strong className="whitespace-nowrap">E-mail:</strong>{" "}
        <a
          href={href}
          className="text-sm sm:text-base text-blue-600 hover:underline truncate"
        >
          {email}
        </a>
      </p>
    </div>
  );
};

export default InfoContato;
