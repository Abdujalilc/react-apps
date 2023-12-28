import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../counter/counterSlice';

export default configureStore({
  reducer: {
    //counterReducer is property createSlice() method return object
    counter: counterReducer,
  },
});

/*
export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0,},
  reducers: {
    increment: (state) => { state.value += 1 },
    incrementByAmount: (state, action) => { state.value += action.payload },
  }
})

export default counterSlice.reducer
*/
