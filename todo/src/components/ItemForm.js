import React, {useState, useContext,} from 'react';

import {ItemContext} from '../context/ItemContext';
// import {reducer} from '../reducers/reducer';

const ItemForm = () => {
    const [item, setItem] = useState('');
    const { addItem } = useContext(ItemContext);

    const handleChange = e => {
        setItem(e.target.value)
    }
    const addItemToContext = e => {
        e.preventDefault();
        addItem(item);
        setItem('')
    }
    return (
        <>
        <form>
            <input type='text'
            name='item'
            value={item} 
            onChange={handleChange}/>
            <button onClick={addItemToContext}>Add Item</button>
        </form>
        </>
    )
}

export default ItemForm;