import React from 'react';
import axios from 'axios';
import './ItemList.css';
import ButtonPurchase from '../ButtonPurchase/ButtonPurchase';

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
};

const deleteItemButton = (id) => {
        axios({
            method: 'DELETE',
            url: '/items/${id}',
            data: {
                id,
            }
        })
        .then ((res) => {
            getItems();
        }).catch((error) => {
            console.log('Error in DeleteItem', error);
        })
    };

// function ItemList({ itemList }, { getItems }){

    


// const handleSubmit = (event) => {
//     event.preventDefault();
//     if (newItemName) {
//         addItem();
//     }
//     else {
//     alert('The new guest needs a name!');
//     }
// }

//   const ButtonPurchase(id) {    //?
//     axios({
//     method: 'PUT', 
//     url: `/items/${id}`
//     })
//       .then((res) => {
//         getItems();
//       })
//       .catch((err) => {
//         console.log('ItemPurchase error:', err);
//       })

//   }

function ItemList({ itemList }){

    return (
        <><h2>Items</h2><table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>unit</th>
                    <th>Mark as Bought/Delete Item</th>
                    
                </tr>
            </thead>
            <tbody>
                {itemList.map(item => (
                   // <Item key={item.id} item={item}/>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        <td>
                        <button onClick={()=>buyItemButton(item.id)}>Buy</button>
                        <button onClick={()=> deleteItemButton(item.id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}

export default ItemList;