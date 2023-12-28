import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount, selectCount, } from './counterSlice';

export function Counter() {
  //export const selectCount = (state) => state.counter.value
  const count = useSelector(selectCount); //get state value

  const dispatch = useDispatch();
  //
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <>
      {/* reducers: { increment: (state) => { state.value += 1 }}, //initialState: {value: 0,} */}
      <button onClick={() => dispatch(increment())} > + </button> &nbsp;

      <span>{count}</span>
      <br /><br />

      <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} /><br /><br />

      {/* reducers: { incrementByAmount: (state, action) => { state.value += action.payload }, } */}
      <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} >
        Add Amount
      </button>
    </>
  );
}
/*export const { increment, incrementByAmount } = counterSlice.actions*/

/*************dispatch*************
dispatch(increment()) --> calling increment method without action payload
dispatch(incrementByAmount(Number(incrementAmount) || 0)) --> calling increment method with action payload
*/

/************useState('2')***************
const [incrementAmount, setIncrementAmount] = useState('2');
--useState('2') initializes a state variable incrementAmount with an initial value of '2'.
--setIncrementAmount is a function used to update that value.
setIncrementAmount(e.target.value) --> changing incrementAmount value in state*/
