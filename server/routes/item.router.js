const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req,res) => {
    const sqlQueryText = `SELECT * FROM
    shopping_list ORDER BY name ASC;`
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

router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO SHOPPING_LIST 
    ("name", "quantity", "unit", "is_purchased")
    VALUES ($1, $2, $3, $4)`
    pool.query(sqlText, [item.name, item.quantity, item.unit, item.is_purchased])
        .then((response) => {
            console.log('Added item to database', response);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log('Error in database POST', error);
            res.sendStatus(500);
        })
})

module.exports = router; 