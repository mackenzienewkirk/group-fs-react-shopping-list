const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

itemRouter.get('/', (req,res) => {
    const sqlQueryText = `SELECT * FROM
    "shopping_list" ORDER BY is_purchased, ORDER BY "name" DESC;`
    pool.query(sqlQueryText)
        .then(result => {
            res.send(result.rows);
            console.log('the rows', result.rows)
        })
        .catch(error => {
            console.log('Error making GET request', error);
            res.sendStatus(500);
        })
});

itemRouter




module.exports = item.router; 