import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/actions/counter';
import { INCREMENT } from '../redux/types';

function Counter({count}) {
  const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
    );
}

const mapStateToProps = state =>{
  return {
    count: state.Counter.count
  }
}

export default connect(mapStateToProps, null )(Counter);