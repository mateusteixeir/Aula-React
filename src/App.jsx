import { useState } from "react";

import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "5 de julho às 14:00",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Ler um livro",
      description: "5 de julho às 15:00",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Fazer compras",
      description: "5 de julho às 16:00",
      isCompleted: false,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="flex flex-col w-full max-w-2xl">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
