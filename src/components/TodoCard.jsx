


export function TodoCard ( {task, index, updateStatus, removeTask} ) {

    return (
        <div className="card todo-item">
            <p>{task.input}</p>
            <div className="todo-buttons">
                <button 
                    disabled={task.complete}
                    onClick={() => updateStatus(index)}
                >
                    <h6>Done</h6>
                </button>
                <button onClick={() => removeTask(index)}>
                    <h6>Delete</h6>
                </button>
                {/* <button onClick={() => editTask(index)}>
                    <h6>Edit</h6>
                </button> */}
            </div>
        </div>
    )
}

