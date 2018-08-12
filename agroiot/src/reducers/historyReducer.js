import {
    HISTORY_FETCH_SUCESS
  } from '../actions/types';
  
  const INITIAL_STATE = {};
  
  export default (state = INITIAL_STATE , action) => {
  
    switch (action.type) {
      case HISTORY_FETCH_SUCESS:
         console.log(action);
      return action.payload;
  
      default:
         return state;
    }
  
  };
  