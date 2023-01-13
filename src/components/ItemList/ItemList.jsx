import React from 'react';
import axios from 'axios';
import DeleteItem from '../DeleteItem/DeleteItem.jsx'
import './ItemList.css';

const buyItemButton = (id) => {
    axios({
        method: 'PUT',
        url: `/items/${id}`,
        data :{
            is_purchased: true,
        },
    })
    .then((res) => {
        getItems();
    })
    .catch((err) => {
        console.log('markTodoComplete error:', err);
    })
}
function ItemList({ itemList }){
    return (
        <><h2>Items</h2><table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>unit</th>
                    <th>is_purchased</th>
                </tr>
            </thead>
            <tbody>
                {itemList.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td><button onClick={()=>buyItemButton(item.id)}>Buy</button></td>
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}

export default ItemList;