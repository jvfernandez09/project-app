import React, { Component } from 'react'
import { Button , Input } from 'antd'


class HomeContainer extends Component {
  constructor(props) {
    super(props)
      this.state = {
      home: '',
      todos: [],
      value: ''
    }
  }

  componentDidMount(){
    this.setState({ home: "Welcome to React" })
  }

  handleChange = e => {
    const txt = e.target.value
    if(!txt) return
    this.setState({ value: txt })
  }

  addItem = () => {
    const todos = this.state.todos
    let value = this.state.value
    if(!value) return
    const item = {
      id: new Date().toString(),
      value
    }

    this.setState({
      value: '',
      todos: [...todos, item]
    })
  }

  removeItem = id => {
    let arrayTodos = this.state.todos
    arrayTodos = arrayTodos.filter(td => id !== td.id)
    this.setState({
      value: '',
      todos: arrayTodos
    })
  }

  render (){
    return (
      <div className="App" style={{ padding: "20px 30px" }}>
        <h3>{this.state.home}</h3>
        <Input
          type="text"
          name="todo"
          value={this.state.value}
          onChange={this.handleChange}
          style={{ width: '80%'}}
        />
        <Button
          className="btn btn-primary"
          onClick={this.addItem}
        >
          Add
        </Button>
        <br />
        <ul className="list-group mt-3 mx-5">
          {this.state.todos.map(td => (
            <li
              key={td.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {td.value}
              <Button
                className="btn btn-danger ml-3 pull-right"
                onClick={() => this.removeItem(td.id)}
              >
                Done
              </Button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default HomeContainer
