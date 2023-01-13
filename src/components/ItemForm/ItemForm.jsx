import { useState } from 'react';
import axios from 'axios';

function ItemForm ( {getItems} ){
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState('');
    const [newItemUnit, setNewItemUnit] = useState('');
    const [newItemIsPurchased, setNewItemIsPurchased] = useState('false');

    const addItem = () => {
        axios.post('/items', {
            name: newItemName,
            quantity: newItemQuantity,
            unit: newItemUnit,
            is_purchased: newItemIsPurchased
        })
          .then(response => {
            // clear inputs need to do still
            getItems();
          })
          .catch(err => {
            alert('Error Adding Item');
            console.log(err);
          })
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        if (newItemName) {
            addItem();
        }
        else {
          alert('what do you want to purchase');
        }
      }
      return(
        <form onSubmit={handleSubmit}>
            <label>
            Name
            </label>
            <input
            type="text"
            placeholder="Name"
            value={newItemName}
            onChange={(evt) => setNewItemName(evt.target.value)}
            />
            <input
            type="text"
            placeholder="Quantity"
            value={newItemQuantity}
            onChange={(evt) => setNewItemQuantity(evt.target.value)}
            />
            <input
            type="text"
            placeholder="Unit"
            value={newItemUnit}
            onChange={(evt) => setNewItemUnit(evt.target.value)}
            />
            <div>
            Has this been purchased
            <div >
                <div>
                <label>
                    <input
                    type="radio"
                    value={true}
                    checked={newItemIsPurchased === 'true'}
                    name="is_purchased"
                    onChange={(evt) => setNewItemIsPurchased(evt.target.value)}
                    />
                    Yes, this item has been purchased.
                </label>
                </div>
                <div>
                <label>
                    <input
                    type="radio"
                    value={false}
                    checked={newItemIsPurchased === 'false'}
                    name="is_purchased"
                    onChange={(evt) => setNewItemIsPurchased(evt.target.value)}
                    />
                    No, this item has not been purchased.
                </label>
                </div>
            </div>
            </div>
            <button type="submit">Add Item</button>
        </form>
    )
}
export default ItemForm;
