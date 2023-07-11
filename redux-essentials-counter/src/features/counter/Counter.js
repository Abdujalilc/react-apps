import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, incrementByAmount, selectCount, } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <>
      <div >
        <button onClick={() => dispatch(increment())} > + </button> &nbsp;
        <span>{count}</span> 
      </div>
      <br />
      <div>
        <input value={incrementAmount} onChange={e => setIncrementAmount(e.target.value)} /><br /><br />
        <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} >
          Add Amount
        </button>
      </div>
    </>
  );
}
