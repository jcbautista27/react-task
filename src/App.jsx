import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>App Tasks</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default App
