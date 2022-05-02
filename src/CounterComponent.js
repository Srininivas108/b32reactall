import React from "react";


class CounterComponent extends React.Component{
    constructor(props){
        super();
        this.state={
          value : 5
        }
        this.handleIncrement= this.handleIncrement.bind(this);
    }
    componentDidMount(){
      console.log("component mount phase after render")
    }
    componentDidUpdate(){
      console.log("component update after render")
    }
    componentWillUnmount(){
      console.log("component unmounting phase")
    }

    handleIncrement (){
      this.setState({value : ++this.state.value})
    }
    handleDcrement =() =>{
      this.setState({value : --this.state.value})
    }

    render(){
     const handleReset=()=> {
        this.setState({value: 5})
      }
        
        return(
          <>
            <h1>This is {this.props.componentName}</h1>
            Value:  {this.state.value} <br/> <br/>
           
             <button onClick= {this.handleIncrement}>Increment</button>  &nbsp;

             <button onClick={this.handleDcrement}>Decrement</button>
             <button onClick={handleReset}>Reset</button>
             
          </>

        )
    }

}
export default CounterComponent;
