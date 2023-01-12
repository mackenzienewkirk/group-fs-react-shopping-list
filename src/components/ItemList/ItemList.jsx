import React from 'react';
import './ItemList.css';

const ItemList = () => {
    axios({
        method: 'GET',
        url: '/items',
    }).then(res => {
    console.log('shopping list', res.data);
    this.setState({
        shoppingList: res.data
    })
    }).catch((error) => {
    alert('Unable to get shopping list.');
    console.log('Error in GET', error);
    })
}

return (
    <>
    <h2>Shopping List</h2>
    <table>
        <thead>
        <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Mark As Purchased</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {ItemList.map(item => (
            <tr key={item.id}>
            <td>{item.name}</td>
            <td>`{item.quantity} {item.unit}`</td>
            <td><button></button></td>
            </tr>
        ))}
        </tbody>
    </table>
    </>
)

export default ItemList;