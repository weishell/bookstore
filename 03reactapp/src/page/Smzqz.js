import { Component } from "react";

export default class C1 extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
        this.state={f1:this.props.f1}
    }
    // static getDerivedStateFromProps(v1,v2){
    //     console.warn(v1,v2,v1.f1,v2.f1)
    //     if(v1.f1 === v2.f1){
    //         console.warn(22222)
    //         return null
    //     }
    //     console.log('ccc')
       
    //     return {f1:v1.f1}
    // }
    shouldComponentUpdate(v1,v2){
        console.warn(v1,v2,v1.f1,v2.f1)
        if(v1.f1 === v2.f1){
            console.warn(22222)
            return false
        }
        this.setState({f1:v1.f1})
        return true
    }
    render(){
       return(
        <div>
            {this.props.children.content}
            {this.props.children.txt}
            <button onClick={this.props.children.btnClick}>button</button>
        </div>
       )
    }
}