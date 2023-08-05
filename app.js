const express = require('express');
const app = express();
require("dotenv").config();
require('./src/config/databaseConnection.js')
const port = process.env.PORT || 5001; 
const todoRouter = require('./src/routers/todoRouter.js');

app.use(express.json())
app.use('/api', todoRouter)

app.get('/', (req, res) => {
    res.send("Welcome")
})

app.listen(port, () => {
    console.log(`Server ${port} listening on`);
})