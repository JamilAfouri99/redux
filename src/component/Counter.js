import React from "react"
import {connect} from "react-redux"

class Counter extends React.Component{
    render(){
        return(
            <div>
                <p>Times:{this.props.counter}</p>
                <button onClick={this.props.increase}>Increase</button>
                <button onClick={this.props.deccrease}>Decrease</button>
            </div>
        )
    }
}

const StoreToProps= (e)=>{
    return ({counter : e.counter})
}
const DispatchToProps = (e)=>{
    return({
        increase:()=>e({type:"Increase"}),
        deccrease:()=>e({type:"Decrease"})
    })
}

export default connect (StoreToProps,DispatchToProps)(Counter)