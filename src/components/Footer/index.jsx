const Footer = () => {
  return (
    <footer className="bg-[#121316] text-white mt-8">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center text-sm md:text-base">
        <p>&copy; {new Date().getFullYear()} Desenvolvido por Enio</p>
        <p className="opacity-80">Todos os direitos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
