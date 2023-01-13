import React from 'react';
import axios from 'axios';
import './ItemList.css';
//import ButtonPurchase from '../ButtonPurchase/ButtonPurchase';


const handleSubmit = (event) => {
    event.preventDefault();
    if (newItemName) {
        addItem();
    }
    else {
      alert('The new guest needs a name!');
    }
  }

  const ButtonPurchase(id) {    //?
    axios({
      method: 'PUT', 
      url: `/items/${id}`
    })
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        console.log('ItemPurchase error:', err);
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
                   // <Item key={item.id} item={item}/>
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.unit}</td>
                        {/* <td>{String(item.is_purchased)}</td> */}
                    <td> <form onSubmit={ButtonPurchase}>
                        <button>Purchase</button>
                        </form></td>
                    </tr>
                ))}
            </tbody>
        </table></>
    )
}

export default ItemList;