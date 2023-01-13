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
// router.put('/items/keyid?', (req, res) => {
//     const idToUpdate = req.params.id;  //figure out keys
//     const newRender = req.body.render;  //figure out react put
    
//     let sqlQuery = `
//         UPDATE "shopping_list"
//         SET "is_purchased"=$1
//         WHERE "id"=$2
//     `
//     let sqlValues = [purchaseChange, idToUpdate];
=======
// itemRouter

>>>>>>> b2e96bdf724dac3ab029fd06275e5cbb7e246322

//     pool.query(sqlQuery, sqlValues)
//         .then((dbRes) => {
//             res.sendStatus(200);
//         })
//         .catch((dbErr) => {
//             console.log('Error in render PUT', dbErr);
//         });
// });


module.exports = router; 