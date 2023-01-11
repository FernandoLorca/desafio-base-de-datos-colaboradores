const Header = ({ onchange }) => {
  return (
    <div className="flex justify-between items-center bg-gray-900 text-white p-4">
      <h2>Buscador de colaboradores</h2>
      <input
        type="text"
        placeholder="Busca un colaborador"
        className="text-gray-700 rounded p-1"
        onChange={onchange}
      />
    </div>
  );
};

export default Header;
