const exprees = require('express');

const PORT = process.env.PORT || 3001;
const app = exprees();

//Express middleware
app.use(exprees.urlencoded({ extended: false}));
app.use(exprees.json());


//Default response for any other request(Not found) Catch all
app.use((req, res) =>{
    res.status(404).end()
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});