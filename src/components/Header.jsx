


export function Header( { tasks })    {
    const openTasks = tasks.filter((task) => !task.complete);
    return (
        <header>
            <h1 className="text-gradient">
                You have {openTasks.length}
                open {openTasks.length === 1? 'Task': 'Tasks'}.
            </h1>
        </header>
    )
}