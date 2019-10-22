require('dotenv').config();
const massive = require('massive');
const express = require('express');
const controller = require('./controller');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    console.log('connected to db');
    app.set('db', db)
});

app.get("/api/inventory", controller.getProducts);



app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
