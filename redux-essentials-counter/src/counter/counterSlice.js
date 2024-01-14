import { createSlice } from '@reduxjs/toolkit'

//createSlice - very important method with multiple return properties
export const counterSlice = createSlice({// returns interface Slice
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

//getting value from state by name. // name: 'counter'
//const count = useSelector(selectCount); // called like this
//const count = useSelector((state) => state.counter.value); // could be called like this
export const selectCount = (state) => state.counter.value

//exporting reducer from slice
export default counterSlice.reducer

/*
export interface Slice {
  name: Name;
  reducer: Reducer<State>;
  actions: CaseReducerActions<CaseReducers, Name>;
  caseReducers: SliceDefinedCaseReducers<CaseReducers>;
  getInitialState: () => State;
}
*/