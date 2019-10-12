import React, {useContext} from 'react';

import {ItemContext} from '../context/ItemContext';

const Item = props => {
    const {toggleItem} = useContext(ItemContext)
    return (
        <div>
            <div>{props.item.item}
            <button onClick={() => toggleItem(props.item.id)}> complete </button>
            </div>
        </div>
    )
}

export default Item;