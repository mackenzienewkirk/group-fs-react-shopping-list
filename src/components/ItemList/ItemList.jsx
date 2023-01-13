import React from 'react';
import axios from 'axios';
import './ItemList.css';

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
                        {/* {item.is_purchased ? <td>Purchased</td> : <td><button onClick={deleteItem(item.id)}>Delete</button><button>Mark as Purchased</button></td>} */}
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}

export default ItemList;