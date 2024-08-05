// reducer.js  
import { INCREMENT, DECREMENT, OTHERFUN } from './actions';  
  
function counterReducer(state = { value: 5 }, action) {  
  switch (action.type) {  
    case INCREMENT:  
      return { value: state.value + 1 };  
    case DECREMENT:  
      return { value: state.value - 1 };  
    case OTHERFUN:  
      return { value: state.value * action.payload.number }; 
    default:  
      return state;  
  }  
}  
  
export default counterReducer; 