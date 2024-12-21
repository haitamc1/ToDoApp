import { TodoCard } from './TodoCard'


export function TodoList({tasks, tab, removeTask, updateStatus})  {

    const filteredTask = tab === 'All'?
        tasks:
        tab === 'Completed'? 
        tasks.filter(task => task.complete):
        tasks.filter(task => !task.complete);

    return (
        <>
            {filteredTask.map((task, index) =>
                <TodoCard 
                    key={index}
                    task={task}
                    index={tasks.findIndex(val => val.input === task.input)}
                    updateStatus={updateStatus}
                    removeTask={removeTask}
                />
            )}
        </>
    )
}