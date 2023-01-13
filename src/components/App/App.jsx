import React from 'react';
import { useState, useEffect } from 'react';
import ItemInput from '../ItemInput/ItemInput.jsx';
import ItemList from '../ItemList/ItemList';
import axios from 'axios';

import Header from '../Header/Header.jsx'
import './App.css';

function App() {

    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        getItems()
    }, [])
    const getItems = () => {
        axios.get('/items')
        .then(response => {
            setItemList(response.data)
        })
            .catch((error) => {
        alert('Unable to get shopping list.');
        console.log('Error in GET', error);
        })
    }


    return (
        <div className="App">
            <Header />
            <main>
                <p>Under Construction...</p>
                {/* <ItemForm getItems={getItems} /> */}
                <ItemList itemList={itemList} />
                {/* <ItemPurchase getItems={getItems} /> */}
            </main>
        </div>
    );
}



export default App;
