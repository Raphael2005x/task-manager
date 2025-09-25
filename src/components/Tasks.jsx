import { Check, ChevronRightIcon, Trash2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks = [], onTaskClicked, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set('title', task.title);
        query.set('description', task.description);
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => onTaskClicked(task.id)}
                        className={`bg-slate-400 w-full text-white p-1 rounded-md text-left flex items-center gap-1 ${task.isCompleted ? 'line-through' : ''}`}>
                        {task.isCompleted && <Check className="text-green-400" />}
                        {!task.isCompleted && <X className='text-red-500' />}
                        {task.title}

                    </button>
                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => onDeleteTaskClick(task.id)}>
                        <Trash2 />
                    </Button>
                </li>
            ))}
        </ul>
    )
}
export default Tasks