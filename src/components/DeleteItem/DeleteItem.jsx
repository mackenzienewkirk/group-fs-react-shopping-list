import React from 'react';
import axios from 'axios';

const DeleteItem = ({ id }) => {
    axios.delete (`/items/${id}`)
    .then ((res) => {
        res.sendStatus(204);
    }).catch((error) => {
        console.log('Error in DeleteItem', error);
    })
};

export default DeleteItem;