const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() =>{
        console.log('Connection successful to database');
    })
    .catch((err) => {
        console.log('Connection failed to connect to database, error: ' + err)
    })