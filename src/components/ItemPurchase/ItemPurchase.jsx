import { useState, useEffect } from 'react';
import axios from 'axios';

<<<<<<< HEAD
function ItemPurchase(getItems) {    //?
    axios({
      method: 'PUT', 
      url: `/items/${idToUpdate}`
    })
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        console.log('ItemPurchase error:', err);
      })

      
  }



export default ItemPurchase;

{/* //   axios({
//     method: 'PUT',
//     url: `/blah/${thing}`,
//     data: {someKey: 'Matt'}
//   })

//   axios.put(`/blah/${thing}`, {someKey: 'Matt'}) */}
=======
function ItemPurchase(getItems) {
    const idToUpdate = $(this).closest('tr').data().id;
    axios.put('/items/:id',{ //key?
        method: 'PUT',
        url: `/items/${getItems}`
    })
    .then((res) => {
        getItems();
    })
    .catch((err) => {
        console.log('markTodoComplete error:', err);
    })
}
export default ItemPurchase;
>>>>>>> 765d8efb7945a2479b761519963fe10ff2186cc3
