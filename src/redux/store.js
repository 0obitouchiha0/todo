import { configureStore } from '@reduxjs/toolkit';
import lists from './reducers/lists'

const store = configureStore({
  reducer: lists
})

export default store;