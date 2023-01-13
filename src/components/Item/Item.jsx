import React from 'react';
import ItemList from '../ItemList/ItemList';

{itemList.map(item => (
    <Item key={item.id} item={item}/>
))}

export default Item;