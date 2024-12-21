import { useState } from "react"


export function TodoInput({ addTask }) {
    const [input, setInput] = useState('');
    return (
        <div className="input-container">
            <input 
                placeholder="Task"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></input>
            <button 
                onClick={() => {
                    if (!input) { return }
                    addTask(input)
                    setInput('')
                }}
            >
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    )
}