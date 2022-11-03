const express = require('express');
const router = express.Router();
const db = require('../../db/database')
const inputCheck= require('../../utils/inputCheck')
router.use(require('./candidateRoutes'));


router.get('/voters', (req, res)=>{
    const sql = `SELECT * FROM voters ORDER BY last_name`;
    const params = []
    db.all(sql, params, (err, rows)=>{
        if(err){
            res.status(500).json({ error: err.message})
        }
        res.json({
            message: "SUCCESS!!!",
            data: rows
        })
    })
})


module.exports = router;