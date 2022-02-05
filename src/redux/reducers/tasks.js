import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ task }) => {
    axios.post('https://react-todooo.herokuapp.com:3001/tasks', { listId: task.listId, text: task.text, completed: false })
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async ({ task }) => {
    axios.delete('https://react-todooo.herokuapp.com:3001/tasks/' + task.taskId)
  }
)

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async ({ task }) => {
    axios.patch('https://react-todooo.herokuapp.com:3001/tasks/' + task.taskId, { text: task.text, completed: task.completed })
  }
)


const tasks = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: {
    [addTask.fulfilled]: (state, { payload }) => {
      state.tasks.push(payload)
    },
    [deleteTask.fulfilled]: (state, { payload }) => {
      state.tasks.filter(task => task.id !== payload)
    },
    [editTask.fulfilled]: (state, { payload }) => {
      state.tasks[payload.id].text = payload.text
      state.tasks[payload.id].completed = payload.completed
    }
  }
})

export default tasks.reducer