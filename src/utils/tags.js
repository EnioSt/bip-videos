export const TAGS = [
  { label: "Todos", value: "todos" },
  { label: "Gestor", value: "gestor" },
  { label: "PDV", value: "pdv" },
  { label: "Portal de Compras", value: "portal" },
  { label: "Menuboard", value: "menuboard" },
];

export const TAG_COLORS = {
  pdv: "bg-green-100 text-green-800",
  gestor: "bg-blue-100 text-blue-800",
  portal: "bg-yellow-100 text-yellow-800",
  menuboard: "bg-pink-100 text-pink-800",
  outros: "bg-gray-200 text-gray-700",
};

export const formatarTag = (tag) => {
  const nomesAmigaveis = {
    pdv: "PDV",
    gestor: "Gestor",
    portal: "Portal de Compras",
    menuboard: "Menu Board",
    outros: "Outros",
  };

  return nomesAmigaveis[tag] || tag;
};
