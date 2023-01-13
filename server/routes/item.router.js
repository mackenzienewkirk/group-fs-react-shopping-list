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

<<<<<<< HEAD





=======
>>>>>>> 765d8efb7945a2479b761519963fe10ff2186cc3
// Setup a POST route to add a new item to the database
router.post('/', (req, res) => {
    const item = req.body;
    const sqlText = `INSERT INTO shopping_list ("name", "quantity", "unit", "is_purchased")
                    VALUES ($1, $2, $3, $4)`;
    pool.query(sqlText, [item.name, item.quantity, item.unit, item.is_purchased])
        .then((result) => {
            console.log(`Added item to the database`, item);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})
router.put('/:id', (req, res) => {
    const idToUpdate = req.params.id;  //figure out keys
    const buyItemButton = 'true';  //figure out react put
    
    let sqlQuery = `
        UPDATE "shopping_list"
        SET "is_purchased"=$1
        WHERE "id"=$2
    `
    let sqlValues = [buyItemButton, idToUpdate];
        pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
        res.sendStatus(200);
    })
        .catch((dbErr) => {
        console.log('Error in render PUT', dbErr);
    });
});

<<<<<<< HEAD

router.put('/id', (req, res) => {
    const idToUpdate = req.params.id;  //figure out keys
    const purchaseChange = 'true';  
    
    let sqlQuery = `
        UPDATE "shopping_list"
        SET "is_purchased"=$1
        WHERE "id"=$2
    `
    let sqlValues = [purchaseChange, idToUpdate];
    pool.query(sqlQuery, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('Error in render PUT', dbErr);
        });
});
=======
//! router.delete(`/:id`, (req, res) => {
//     let id = req.params.id;
//     let sqlQuery = `
//     DELETE FROM "shopping_list"
//     WHERE "id"=$1;
//     `
//     pool.query(sqlQuery, [id])
//     .then((dbRes) => {
//         res.sendStatus(204);
//     }).catch((dbErr) => {
//         console.log(`Error in /items router DELETE`, dbErr);
//         res.sendStatus(500);
//     });
// });
>>>>>>> 765d8efb7945a2479b761519963fe10ff2186cc3


module.exports = router; 