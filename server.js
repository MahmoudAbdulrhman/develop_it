const exprees = require('express');
const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 3001;
const app = exprees();

//Express middleware
app.use(exprees.urlencoded({ extended: false}));
app.use(exprees.json());

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Connected to the election database.')
});

db.all(`SELECT * FROM candidates`,(err, rows)=>{
console.log(rows)
});


//Default response for any other request(Not found) Catch all
app.use((req, res) =>{
    res.status(404).end()
});


//Start server after DB connection
db.on('open', () =>{
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
    });
})