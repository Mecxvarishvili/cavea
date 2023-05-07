const express = require('express');
const app = express();
const PORT = 8000;


app.get("/", (req, res) => {
    res.send("hello")
})

app.get("/invetories", (req, res) => {
    res.send("inventories")
})

app.post("/inventories", (req, res) => {
    res.send("inventories")
})

app.delete("/inventories/:inventoryID", (req, res) => {
    res.send("sucsessfully deleted")
})

app.listen(PORT, () => console.log(`Running on Port: ${PORT}`))