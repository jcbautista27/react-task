import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Taks 1",
    description: "Task 1 description",
    completed: false,
  },
  {
    id: "2",
    title: "Taks 2",
    description: "Task 2 description",
    completed: false,
  },
  {
    id: "3",
    title: "Taks 3",
    description: "Task 3 description",
    completed: false,
  },
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
      //[...state, action.payload]  alternativa para agregar datos a un objeto
    },

    deleteTask: (state, action) => {
      const taskFound = state.find((task) => task.id === action.payload);
      if (taskFound) {
        state.splice(state.indexOf(taskFound), 1);
      }
    },

    editTask: (state, action) => {
      const { id, title, description } = action.payload;
      const taskFound = state.find((task) => task.id === id);
      if (taskFound) {
        taskFound.title = title;
        taskFound.description = description;
      }
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
