const express = require('express');
const sequelize = require("./db/config")
const bodyParser = require('body-parser')
const InventoriesRoute = require('./route/inventories')

const PORT = 8000;
const app = express();
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("hello")
})
app.use("/inventories", InventoriesRoute)

app.listen(PORT, () => console.log(`Running on Port: ${PORT}`))