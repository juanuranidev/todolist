import {React, useState} from "react";
import Form from "./Form/Form";
import ToDoList from "./ToDoList/ToDoList";

function App() {
  const [inputText, setInputText] = useState('')
  const [toDos, setToDos] = useState([])

  return (
    <main>
      <h1>Tareas Pendientes</h1>
      <Form toDos={toDos} setToDos={setToDos} inputText={inputText} setInputText={setInputText} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </main>
  );
}

export default App;