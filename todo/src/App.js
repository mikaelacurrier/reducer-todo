import React, { useReducer } from 'react';
import './App.css';

import ItemList from './components/ItemList';

// Context
import {ItemContext} from './context/ItemContext';

// Reducer and Initial State
import {reducer, initialState} from './reducers/reducer';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {Provider} = ItemContext;

    const addItem = item => {
        dispatch({ type: 'ADD_TODO', payload: item})
    }
    const toggleItem = item => {
        dispatch({ type: 'TOGGLE_TODO', payload: item})
    }
    const clearCompleted = () => {
        dispatch({ type: 'CLEAR_COMPLETED'})
    }
  return (
    <div className="App">
    <Provider value = {{state, dispatch, addItem, toggleItem, clearCompleted}}>
     <ItemList />
     </Provider >
    </div>
  );
}

export default App;
