const Input = ({ valueState, onChangeProp }) => (
  <input
    type="text"
    className="border border-gray-600 py-2 px-3 w-full text-gray-700 rounded"
    placeholder="Ingresa el nombre del colaborador"
    value={valueState}
    onChange={onChangeProp}
  />
);

export default Input;
