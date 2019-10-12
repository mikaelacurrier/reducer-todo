import React, {useContext} from 'react';
import Item from './Item';
import {ItemContext} from '../context/ItemContext';

import ItemForm from './ItemForm';
const ItemList = () => {
    const {state, clearCompleted} = useContext(ItemContext)
    return (
        <div>Item List
        <ItemForm />
        <button onClick={clearCompleted}>Clear Completed</button>
        {state.map(item => <Item item={item} key={item.id} />)}
        </div>
    )
}
export default ItemList;