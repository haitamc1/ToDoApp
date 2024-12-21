import { TodoCard } from './TodoCard'


export function TodoList({tasks})  {

    const tab = 'All';
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
                />
            )}
        </>
    )
}