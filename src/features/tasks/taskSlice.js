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
];

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    
  },
});

export const {} = taskSlice.actions;

export default taskSlice.reducer;
