import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/bip_360_logo.jpg";

const Menu = () => {
  const navigate = useNavigate();

  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Contato",
      to: "/contato",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <div className="bg-gray-100">
      <nav className="flex flex-col md:flex-row items-center md:items-center justify-between text-center md:text-left p-4 max-w-screen-xl mx-auto">
        <h1 onClick={() => navigate("/")} className="mb-4 md:mb-0">
          <img
            src={logo}
            alt="logo da empresa"
            className="w-24 h-24 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </h1>
        <ul className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
          {rotas.map((rota, index) => (
            <li key={index}>
              <Link
                to={rota.to}
                className="font-mono text-xl hover:underline hover:text-black-900 transition-colors duration-200"
              >
                {rota.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
