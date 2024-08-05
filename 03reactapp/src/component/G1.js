import React,{Component} from 'react'
import P1 from './P1.js'
export const MyContext = React.createContext();
  

export default class G1 extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state ={val:10}
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({val:this.state.val+1})
        }, 2000);
    }
    render(){
        return (<div>
            demo
            <MyContext.Provider value={this.state.val}>
                <P1/>
            </MyContext.Provider>
        </div>)
    }
}