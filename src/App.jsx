import { useState } from "react";
import { BaseColaboradores as db } from "./baseColaboradores";

const App = () => {
  const [workers, setWorkers] = useState(db);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const inputNameChange = (e) => {
    setName(e.target.value);
  };

  const inputEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newWorker = {
      id: Date.now(),
      nombre: name,
      correo: email,
    };

    setWorkers([...workers, newWorker]);
    setName("");
    setEmail("");
  };

  return (
    <>
      <div className="flex justify-between items-center bg-gray-900 text-white p-4">
        <h2>Buscador de colaboradores</h2>
        <input
          type="text"
          placeholder="Busca un colaborador"
          className="text-gray-700 rounded p-1"
        />
      </div>

      <form onSubmit={handleSubmit} className="p-5">
        <div className="mb-5">
          <p className="mb-2">Nombre del colaborador</p>
          <input
            type="text"
            className="border border-gray-600 py-2 px-3 w-full text-gray-700 rounded"
            placeholder="Ingresa el nombre del colaborador"
            value={name}
            onChange={inputNameChange}
          />
        </div>
        <div className="mb-5">
          <p className="mb-2">Correo del colaborador</p>
          <input
            type="text"
            className="border border-gray-600 py-2 px-3 w-full text-gray-700 rounded"
            placeholder="Ingresa el correo del colaborador"
            value={email}
            onChange={inputEmailChange}
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
          {workers.map((worker) => (
            <li key={worker.id}>
              {worker.nombre} - {worker.correo}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
