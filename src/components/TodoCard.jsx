


export function TodoCard ( {task} ) {
    return (
        <div className="card todo-item">
            <p>{task.input}</p>
            <div className="todo-buttons">
                <button disabled={task.comlete}>
                    <h6>Done</h6>
                </button>
                <button>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}

