import React, { Component } from 'react'



class SampleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      num: 0
    }
  }

  increment = () => {
    let increment = this.state.num + 1
    this.setState({
       num: increment
    })
  }

  decrement = () => {
    let decrement = this.state.num -1
    this.setState({
      num: decrement
    })
  }

  render(){
    return(
      <>
        <div>{this.state.num}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }

}


export default SampleList
