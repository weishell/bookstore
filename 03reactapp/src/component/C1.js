
// MyComponent.js  
import React, { useEffect, useState } from 'react';  
import { increment, decrement } from '../store/actions.js';  
  
function MyComponent({store}) {  
  const [count, setCount] = useState(() => store.getState().value);  
  
  useEffect(() => {  
    const unsubscribe = store.subscribe(() => {  
      setCount(store.getState().value);  
    });  
    return () => {  
      unsubscribe();  
    };  
  }, [store]);  
  
  const handleIncrement = () => {  
    store.dispatch(increment());  
  };  
  
  const handleDecrement = () => {  
    store.dispatch(decrement());  
  };  
  
  return (  
    <div>  
      <p>Count: {count}</p>  
      <button onClick={handleIncrement}>Increment</button>  
      <button onClick={handleDecrement}>Decrement</button>  
    </div>  
  );  
}  
  
export default MyComponent;