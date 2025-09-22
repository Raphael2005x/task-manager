import { useState } from "react";
import { v4 } from "uuid";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Estudar React',
    description: 'Ler a documentação do React e fazer alguns tutoriais',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Fazer compras',
    description: 'Comprar frutas, verduras e leite',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Exercitar-se',
    description: 'Fazer uma caminhada de 30 minutos',
    isCompleted: false,
  }]);

  function onTaskClicked(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      };
      return task;
    });
    setTasks(newTasks);
  };

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    };
    setTasks(prev => [...prev, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks tasks={tasks} onTaskClicked={onTaskClicked} onDeleteTaskClick={onDeleteTaskClick} />
      </div>
    </div>
  );
};

export default App;