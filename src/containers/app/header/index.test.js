import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"

import HeaderContainer from 'app/header'

let container = null

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div") 
  document.body.appendChild(container) 
}) 

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container) 
  container.remove() 
  container = null 
}) 

it("renders with or without a name", () => {
  act(() => {
    render(<HeaderContainer />, container) 
  }) 
  expect(container.textContent).toBe("Header") 
})
