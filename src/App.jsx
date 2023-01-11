import { useState } from "react";
import { BaseColaboradores as db } from "./assets/baseColaboradores";

import Header from "./components/Header";
import Form from "./components/Form/Form";
import List from "./components/List";

const App = () => {
  const [workers, setWorkers] = useState(db);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workerSearch, setWorerSearch] = useState("");

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
      <Header onchange={(e) => setWorerSearch(e.target.value)} />

      <Form
        nameState={name}
        emailState={email}
        onChangeNameProp={inputNameChange}
        onChangeEmailProp={inputEmailChange}
        onSubmitProp={handleSubmit}
      />

      <List workersState={workers} workerSearchState={workerSearch} />
    </>
  );
};

export default App;
