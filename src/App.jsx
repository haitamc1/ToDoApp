import { useState } from 'react'
import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

function App() {
  // const [tasks, setTasks] = useState([]);

  const tasks = [
  { input: 'Hello! Add your first todo!', complete: true },
  { input: 'Get the groceries!', complete: false },
  { input: 'Learn how to web design', complete: false },
  { input: 'Say hi to gran gran', complete: true },
  ]

  return (
    <>

      <Header tasks={tasks}/>
      <Tabs tasks={tasks}/>
      <TodoInput />
      <TodoList tasks={tasks}/>

    </>
  )
}

export default App
