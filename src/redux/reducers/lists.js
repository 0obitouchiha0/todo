import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://react-todooo.herokuapp.com'

export const setLists = createAsyncThunk(
  'lists/setLists',
  async () => {
    const res = axios
      .get(`${BASE_URL}:3001/lists?_expand=color&_embed=tasks`)
      .then(({ data }) => {
        return data
      })
    return res;
  }
)

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async (task) => {
    axios.post(`${BASE_URL}:3001/tasks`, { listId: task.listId, text: task.text, completed: false })
    return task;
  }
)

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (task) => {
    axios.delete(`${BASE_URL}:3001/tasks/` + task.taskId)
    return task;
  }
)

export const editTask = createAsyncThunk(
  'tasks/editTask',
  async (task) => {
    axios.patch(`${BASE_URL}:3001/tasks/` + task.taskId, { text: task.text, completed: task.completed })
    return task;
  }
)





export const addList = createAsyncThunk(
  'lists/addList',
  async (list) => {
    axios.post(`${BASE_URL}:3001/lists`, {
      name: list.name,
      colorId: list.colorId
    })
    return list;
  }
)

export const deleteList = createAsyncThunk(
  'lists/deleteList',
  async (listId) => {
    axios.delete(`${BASE_URL}:3001/lists/` + listId)
    return listId;
  }
)

export const editList = createAsyncThunk(
  'lists/editList',
  async (list) => {
    axios.patch(`${BASE_URL}:3001/lists/` + list.listId, { name: list.name })
    return list;
  }
)

const lists = createSlice({
  name: 'lists',
  initialState: {
    lists: []
  },
  reducers: {},
  extraReducers: {
    [setLists.fulfilled]: (state, { payload }) => {
      state.lists = payload
    },
    [addTask.fulfilled]: (state, { payload }) => {
      state.lists[payload.listId - 1].tasks.push(payload)
    },
    [deleteTask.fulfilled]: (state, { payload }) => {
      state.lists[payload.listId].tasks = state.lists[payload.listId].tasks.filter(task => {
        return task.id !== payload.taskId
      })
    },
    [editTask.fulfilled]: (state, { payload }) => {
      state.lists[payload.listId - 1].tasks.find(task => task.id === payload.taskId).text = payload.text
      state.lists[payload.listId - 1].tasks.find(task => task.id === payload.taskId).completed = payload.completed
    },
    [addList.fulfilled]: (state, { payload }) => {
      state.lists.push(payload)
    },
    [deleteList.fulfilled]: (state, { payload }) => {
      state.lists = state.lists.filter(list => list.id !== payload)
    },
    [editList.fulfilled]: (state, { payload }) => {
      state.lists[payload.listId - 1].name = payload.name
    }
  }
})


export default lists.reducer