export const initialState = [{
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}];

export const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            }
            console.log('new todo', newTodo)
            return [...state, newTodo]
        case 'TOGGLE_TODO':
            const newState = state.map(item => {
                if(item.id === action.payload) {
                    return{
                        ...item,
                        completed: !item.completed
                    }} return item;
                })
            return newState;
        case 'CLEAR_COMPLETED':
            return state.filter(item => {
                return !item.completed 
            })
        default:
            return state;
            
    }
}