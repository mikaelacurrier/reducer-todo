export const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

export const reducer = (state = initialState, action) => {
    switch (action.type):
        case ADD_TODO:
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            return [...state, newTodo]
        case default:
            return state
}