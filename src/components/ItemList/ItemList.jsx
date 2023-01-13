import React from 'react';
import DeleteItem from '../DeleteItem/DeleteItem.jsx'
import './ItemList.css';


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
                        {item.is_purchased ? <td>Purchased</td> : <td><button onClick=<DeleteItem id={item.id}/>></button>Mark as Purchased<button></button></td>}
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}

export default ItemList;