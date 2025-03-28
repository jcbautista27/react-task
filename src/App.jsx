import { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className=" h-screen bg-zinc-900 text-white">
      <div className="flex justify-center items-center h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
