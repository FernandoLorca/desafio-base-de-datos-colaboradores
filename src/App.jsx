import { BaseColaboradores } from "./baseColaboradores";

const App = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-900 text-white p-4">
        <h2>Buscador de colaboradores</h2>
        <input
          type="text"
          placeholder="Busca un colaborador"
          className="rounded p-1"
        />
      </div>

      <form className="p-5">
        <div className="mb-5">
          <p className="mb-2">Nombre del colaborador</p>
          <input
            type="text"
            className="border border-gray-600 py-2 px-3 w-full rounded"
            placeholder="Ingresa el nombre del colaborador"
          />
        </div>
        <div className="mb-5">
          <p className="mb-2">Correo del colaborador</p>
          <input
            type="text"
            className="border border-gray-600 py-2 px-3 w-full rounded"
            placeholder="Ingresa el correo del colaborador"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white py-2 px-6 rounded-md"
        >
          Agregar colaborador
        </button>
      </form>

      <div className="p-5">
        <h2 className="text-2xl mb-3">Listado de colaboradores</h2>
        <ul>
          {BaseColaboradores.map((worker) => (
            <li>
              {worker.nombre} - {worker.correo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
