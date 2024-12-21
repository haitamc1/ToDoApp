



export function Tabs( { tasks, selectedTab, setTab })   {
    const openTasks = tasks.filter((task) => !task.complete);
    const tabs = ['All', 'Open', 'Completed'];

    return (
        <nav className="tab-container">
            {tabs.map(tab => {
                const taskCount = tab === 'All'?
                tasks.length:
                tab === 'Completed'? 
                tasks.filter(task => task.complete).length:
                tasks.filter(task => !task.complete).length;
                return (
                    <button 
                        className={"tab-button " + (tab == selectedTab? ' tab-selected': '')} 
                        key={tab}
                        onClick={() => setTab(tab)}                   
                    >
                        <h3>
                            {tab}
                            <span>(#{taskCount})</span>
                        </h3>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}