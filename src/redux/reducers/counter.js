import React from 'react';
import { DECREMENT, INCREMENT } from '../types';

const initialState = {
    count: 0
};

function Counter(state=initialState, action) {
  switch(action.type){
    case INCREMENT:
          return{
                count: state.count + 1
          }
        
    case DECREMENT:
        return{
            count: state.count - 1
        }

    default:
        return state;
  }
}

export default Counter;