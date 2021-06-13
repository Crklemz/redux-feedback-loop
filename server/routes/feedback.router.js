const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//get route to get into from DB
router.get('/', (req, res) => {
    console.log('GET');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in GET -->', error);
        res.sendStatus(500);  
    });
    
})

//post route to add feedback entries to DB from submit on review component page
router.post('/', (req, res) => {
    
    const {feeling, understanding, support, comments} = req.body;

    let queryText = `INSERT INTO "feedback" (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4);`;

    const values = [feeling, understanding, support, comments]

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201);
    })
    .catch(error => {
        console.log('error adding feedback', error);
        res.sendStatus(500);
    })
    
})

//delete route to remove entries from DB based on id
router.delete('/:id', (req, res) => {
    pool.query(`DELETE FROM "feedback" WHERE id=$1`, [req.params.id])
    .then(result => {
        res.sendStatus(200)
    }).catch(error => {
        console.log('error in DELETE route', error);
        res.sendStatus(500);
    })
})

module.exports = router;