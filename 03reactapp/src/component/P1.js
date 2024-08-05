import React, { useState, useCallback } from 'react';  
import ChildComponent from './C2';  
  
function ParentComponent() {  
  const [count, setCount] = useState(0);  
  
  // 使用 useCallback 来记忆 handleClick 函数  
  // 这样，即使 ParentComponent 重新渲染，handleClick 的引用也不会改变  
  const handleClick = useCallback(() => { 
    alert()
    setCount(count + 1);  
  }, []); 
  
  // 模拟父组件的某个状态变化，导致重新渲染  
  const forceRerender = () => {  
    setCount(count => count + 1); // 这会导致 ParentComponent 和 ChildComponent 重新渲染  
  };  
  
  return (  
    <div>  
      <p>Parent Component: Count is {count}</p>  
      <button onClick={forceRerender}>Force Re-render Parent</button>  
      <ChildComponent onClick={handleClick} />  
    </div>  
  );  
}  
  
export default ParentComponent;