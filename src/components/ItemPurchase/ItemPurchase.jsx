import { useState, useEffect } from 'react';
import axios from 'axios';

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