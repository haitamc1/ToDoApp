import { useState } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  const [tasks, setTasks] = useState([
    { input: 'Hello! Add your first todo!', complete: true },
  ]);

  const [tab, setTab] = useState('All');

  function addTask(newTask){
    const newList = [...tasks, {input: newTask, complete: false}];
    setTasks(newList);
  }

  function removeTask(index){
    const newList = tasks.filter((task, taskIndex) => taskIndex !== index);
    setTasks(newList);
  }

  function updateStatus(index){
    let newList = [...tasks];
    const task = tasks[index];
    task.complete = true;
    newList[index] = task;
    setTasks(newList);
  }

  return (
    <>

      <Header tasks={tasks}/>
      <Tabs tasks={tasks} tab={tab} setTab={setTab}/>
      <TodoInput addTask={addTask}/>
      <TodoList 
        tasks={tasks}
        tab={tab}
        updateStatus={updateStatus}
        removeTask={removeTask}
      />

    </>
  )
}

export default App
