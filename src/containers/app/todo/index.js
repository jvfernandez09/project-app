import React, { useState, useReducer } from 'react'
import { reducer } from 'reducer'
import { Button , Input } from 'antd'

const TodoContainer = () => {
  const [value, setValue] = useState("")
  const [todos, dispatch] = useReducer(reducer, [])

  const handleChange = e => {
    const txt = e.target.value
    if (!txt) return
    setValue(txt)
  }

  const addItem = () => {
    if(!value) return
    const item = {
      id: new Date().toString(),
      value
    }
    dispatch({ type: "add", payload: item })
    setValue("")
  }

  const removeItem = id => {
    dispatch({ type: "remove", payload: id })
  }

  return (
    <div className="App" style={{ padding: "20px 40px" }}>
      <h3>TODO Container</h3>
      <Input
        type="text"
        name="todo"
        value={value}
        onChange={handleChange}
      />
      <Button
        className="btn btn-primary"
        onClick={addItem}
      >
        Add
      </Button>
      <br />
      <ul className="list-group mt-3 mx-5">
        {todos.map(td => (
          <li
            key={td.id}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {td.value}
            <Button
              className="btn btn-danger ml-3 pull-right"
              onClick={() => removeItem(td.id)}
            >
              Done
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoContainer
