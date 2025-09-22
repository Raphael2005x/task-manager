import { Check, ChevronRightIcon, Trash2, X } from "lucide-react"

function Tasks({ tasks = [], onTaskClicked, onDeleteTaskClick }) {
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
                    <button className="bg-slate-400 text-white p-2 rounded-md">
                        <ChevronRightIcon />
                    </button>
                    <button onClick={() => onDeleteTaskClick(task.id)}
                        className={'bg-slate-400 text-white p-2 rounded-md'}>
                        <Trash2 />
                    </button>
                </li>
            ))}
        </ul>
    )
}
export default Tasks