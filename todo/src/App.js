import React, { useState } from 'react';
import './App.css';

import ItemList from './components/ItemList';

// Context
import {ItemContext} from './context/ItemContext';

function App() {
    const [items, setItems] = useState([])
    const {Provider} = ItemContext;

  return (
    <div className="App">
    <Provider value = {{items}}>
     <ItemList />
     </Provider >
    </div>
  );
}

export default App;
