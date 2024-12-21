


export function Header( { tasks })    {
    const openTasks = tasks.filter((task) => !task.complete);
    const taskOrTasks = openTasks.length === 1? 'Task': 'Tasks';
    return (
        <header>
            <h1 className="text-gradient">
                You have {openTasks.length} open {taskOrTasks}.
            </h1>
        </header>
    )
}