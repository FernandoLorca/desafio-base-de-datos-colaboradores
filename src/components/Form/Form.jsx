import InputTitle from "./InputTitle";
import Input from "./Input";
import Button from "../Button";

const Form = ({
  nameState,
  emailState,
  onChangeNameProp,
  onChangeEmailProp,
  onSubmitProp,
  handlerError,
}) => {
  return (
    <form onSubmit={onSubmitProp} className="p-5">
      <div className="mb-5">
        <InputTitle text="Nombre del colaborador" />
        <Input valueState={nameState} onChangeProp={onChangeNameProp} />
      </div>
      <div className="mb-5">
        <InputTitle text="Correo del colaborador" />
        <Input valueState={emailState} onChangeProp={onChangeEmailProp} />
        <p className="text-red-500">{handlerError}</p>
      </div>
      <Button text="Agregar colaborador" buttonType="submit" />
    </form>
  );
};

export default Form;
