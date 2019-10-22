export function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload] 
    case "remove":
      return state.filter(td => action.payload !== td.id) 
    default:
      return state 
  }
}
