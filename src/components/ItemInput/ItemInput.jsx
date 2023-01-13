import { useState } from 'react';
import axios from 'axios';
import './ItemInput.css'

function ItemInput ({  }) {
    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setNewItemQuantity] = useState('');
    let [newItemUnit, setNewItemUnit] = useState('');
    let [newItemIsPurchased, setNewItemIsPurchased] = useState('');

    const addItem = () => {
        axios.post('/items', { name: newItemName, quantity: newItemQuantity, unit: newItemUnit, is_purchased: newItemIsPurchased })
        .then(response => {
            setNewItemName('');
            setNewItemQuantity('');
            setNewItemUnit('');
            setNewItemIsPurchased(false);
        }).catch(error => {
            alert('Error Adding Item');
            console.log(error);
        })
    }
}

export default ItemInput;