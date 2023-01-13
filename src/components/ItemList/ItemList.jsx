import React from 'react';
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
                        <td>{String(item.is_purchased)}</td>
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}

export default ItemList;