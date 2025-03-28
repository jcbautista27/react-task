import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router";

function TaskList() {
  const tasks = useSelector((state) => state.task);
  const dispatch = useDispatch();
  //console.log(tasks);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/5">
      <header className="flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold ">Tasks: {tasks.length}</h1>
        <Link
          className="bg-indigo-500 px-2 py-1 rounded-sm text-sm"
          to="/create-task"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`/edit-task/${task.id}`}
                  className="bg-zinc-400 px-2 py-1 text-xs rounded-md self-center"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-400 px-2 py-1 text-xs rounded-md self-center"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{task.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
