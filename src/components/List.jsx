const List = ({ workersState, workerSearchState }) => {
  return (
    <div className="p-5 flex flex-col items-center">
      <h2 className="text-2xl mb-3">Listado de colaboradores</h2>
      <ul>
        {workersState
          .filter((worker) => {
            return workerSearchState.toLowerCase() === ""
              ? worker
              : worker.nombre.toLowerCase().includes(workerSearchState);
          })
          .map((worker) => (
            <li
              className="border-b border-gray-400 text-center pb-1 px-5 mb-2"
              key={worker.id}
            >
              {worker.nombre} - {worker.correo}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
