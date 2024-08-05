import React,{Component} from 'react'
import C1 from './C1.js'
import C2 from './C2.js'


export default class P1 extends Component{
    constructor(props){
        super(props)
        this.state= {k:1,t:1,arr:[1]}
    }
    render(){
        return (<div>
            <C1 {...this.state}/>
            <C2  foo={this.state.k} numbers={this.state.arr}/>
            <button onClick={this.add}>+++</button>
            <button onClick={this.addnumber}>number</button>

        </div>)
    }
    add = () => { 
        this.setState({
            k:this.state.k+1
        })
    }
    addnumber = () => { 
        this.setState({
            arr:this.state.arr.concat('2')
        })
    }

}