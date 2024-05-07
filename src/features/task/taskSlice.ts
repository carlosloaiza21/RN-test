import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface Task {
  id: number;
  description: string;
}

const initialState: Task[] = [];

export const TaskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
  },
});

export const {addTask} = TaskSlice.actions;

export default TaskSlice.reducer;
