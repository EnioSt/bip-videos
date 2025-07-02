const Tag = ({ children, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition border border-blue-300
        ${
          isActive
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300 text-gray-800"
        }`}
    >
      {children}
    </button>
  );
};

export default Tag;
