import { createSlice } from '@reduxjs/toolkit'

//createSlice - very important method with multiple return properties
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

//these are reducer's methods
export const { increment, incrementByAmount } = counterSlice.actions

//getting value from state
export const selectCount = (state) => state.counter.value

//exporting reducer from slice
export default counterSlice.reducer