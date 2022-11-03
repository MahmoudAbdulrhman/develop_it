const exprees = require('express');
const db = require('./db/database');


const PORT = process.env.PORT || 3001;
const app = exprees();


const apiRoutes = require('./routes/apiRoutes');


//Express middleware
app.use(exprees.urlencoded({ extended: false}));
app.use(exprees.json());



app.use('/api', apiRoutes);



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