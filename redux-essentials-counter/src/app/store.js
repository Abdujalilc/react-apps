import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export default configureStore({
  reducer: {
    //counterReducer is return of createSlice() method
    counter: counterReducer,
  },
});
