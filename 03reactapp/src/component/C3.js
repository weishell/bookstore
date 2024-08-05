import React from 'react';  
import { connect } from 'react-redux';  
import { increment, decrement,incrementAsync } from '../store/actions';  
  
class Counter extends React.Component {  
  render() {  
    console.log(this.props)
    const { value, increment, decrement,incrementAsync } = this.props;  
    return (  
      <div>  
        <p>Count3: {value}</p>  
        <button onClick={increment}>Increment</button>  
        <button onClick={decrement}>Decrement</button>  
        <button onClick={incrementAsync}  >incrementAsync</button>
      </div>  
    );  
  }  
}  
  
const mapStateToProps = (state) => ({  
  value: state.value 
});  
  
const mapDispatchToProps = {  
  increment,  
  decrement,
  incrementAsync  
};  
  
export default connect(mapStateToProps, mapDispatchToProps)(Counter);