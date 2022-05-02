import React from "react";
import CounterComponent from "./CounterComponent";

class ClassCondtionalMount extends React.Component{
    constructor(){
        super();
        this.state={
           render :true
        }
    }
    render(){

        return(
            <div>
                <h1>this is {this.props.componentName}</h1>
                <button onClick={()=>this.setState({render : !this.state.render})}>Mount/Unmount</button>

                {this.state.render ? <CounterComponent componentName={"from classlifecycle"} /> : <></>}   


            </div>

        )

    
    }
}
export default ClassCondtionalMount;