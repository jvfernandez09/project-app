import React, { Component } from 'react'

class SampleList extends Component {
  constructor(props){
    super(props)
    this.state = {
      num: 0,
      toggle: false,
      title: 'Title Name'
    }
  }


  increment = () => {
    let increment = this.state.num + 1
    this.setState({
      num: increment
    })
  }

  decrement = () => {
    let decrement = this.state.num - 1
    this.setState({
      num: decrement
    })
  }

  toggleButton = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }


  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  render(){
    const toggle = this.state.toggle
    return(
      <>
        <div>{this.state.title}</div>
        <div>{this.state.num}</div>
        <button
          disabled={toggle ? true : false }
          onClick={this.increment}
        >Increment
        </button>

        <button
          disabled={toggle ? true : false }
          onClick={this.decrement}
        > Decrement
        </button>
        <button onClick={this.toggleButton}>{toggle ? 'Disabled' : 'Enabled'} </button>

          <input
            onChange={(e) => this.handleChange(e)}
            defaultValue={
              this.state.text
            }
          />
      </>
    )
  }

}


export default SampleList
