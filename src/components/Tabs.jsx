



export function Tabs( { tasks })   {
    const openTasks = tasks.filter((task) => !task.complete);
    const tabs = [
        {type: 'All', count: tasks.length},
        {type: 'Open', count: openTasks.length},
        {type: 'Completed', count: tasks.length - openTasks.length}
    ];

    return (
        <nav className="tab-container">
            {tabs.map(tab => {
                return (
                    <button className="tab-button" key={tab.type}>
                        <h3>
                            {tab.type}
                            <span>(#{tab.count})</span>
                        </h3>
                    </button>
                )
            })}
        </nav>
    )
}