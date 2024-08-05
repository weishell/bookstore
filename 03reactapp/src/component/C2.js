// MyComponent.js  
import React, { useEffect, useState } from 'react'; 
import store from '../store/index.js';
import { increment, decrement,otherFun } from '../store/actions.js';  
  
function MyComponent() {  
  const [count, setCount] = useState(() => store.getState().value);  
  useEffect(() => {  
    const unsubscribe = store.subscribe(() => {  
      setCount(store.getState().value);  
    });  
    return () => {  
      unsubscribe();  
    };  
  }, []);  
  const handleIncrement = () => {  
    store.dispatch(increment());  
  };  
  const handleDecrement = () => {  
    store.dispatch(decrement());  
  };  
  const handleOtherFun = ()=>{
    store.dispatch(otherFun(3))
  }
  return (  
    <div>  
      <p>C2 - Count: {count}</p>  
      <button onClick={handleIncrement}>Increment</button>  
      <button onClick={handleDecrement}>Decrement</button>  
      <button onClick={handleOtherFun}>_____</button>  
    </div>  
  );  
}  
  
export default MyComponent;