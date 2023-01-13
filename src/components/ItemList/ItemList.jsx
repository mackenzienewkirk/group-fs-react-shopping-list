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

function ItemList({ itemList }, { getItems }){

    //! function deleteItem(id) {
    //     axios.delete (`/items/${id}`, { id: id })
    //     .then ((res) => {
    //         getItems();
    //         res.sendStatus(204);
    //     }).catch((error) => {
    //         console.log('Error in DeleteItem', error);
    //     })
    // };

    return (
        <><h2>Items</h2><table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>unit</th>
                    <th>Mark as Purchased/Delete Item</th>
                    
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