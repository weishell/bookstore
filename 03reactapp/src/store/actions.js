// actions.js  
export const INCREMENT = 'INCREMENT';  
export const DECREMENT = 'DECREMENT';  
export const OTHERFUN = 'OTHERFUN';
  
export function increment() {  
  return { type: INCREMENT };  
}  
  
export function decrement() {  
  return { type: DECREMENT };  
  
}  

export const incrementAsync = () => {  
  return (dispatch) => {  
    setTimeout(() => {  
      dispatch(increment());  
    }, 2000);  
  };  
};  

export function otherFun(params){
  return {
    type:OTHERFUN,
    payload:{
      number:params ?? 1
    }
  }
}