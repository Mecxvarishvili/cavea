const express = require('express');
const sequelize = require("./db/config");
const bodyParser = require('body-parser');
const InventoriesRoute = require('./route/inventories');
const Inventory = require("./models/inventory");
const PORT = 8000;
const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors({ origin: "*", methods: "GET,POST,DELETE", optionSuccessStatus: 200 }));
const generateInventories = () => {
    for (let i = 0; i < 300000; i++) {
        const characters = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ";
        let name = '';
        for (let c = 0; c < 15; c++) {
            name += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        const price = Math.floor(Math.random() * 10001);
        const locationId = Math.floor(Math.random() * 5) + 1;
        const inventory = {
            name,
            price,
            locationId
        };
        Inventory.create(inventory);
    }
};
sequelize.sync().then(() => {
    // generateInventories()
    console.log("Connected to the database");
});
app.get("/", (req, res) => {
    res.send("hello");
});
app.use("/inventories", InventoriesRoute);
app.listen(PORT, () => console.log(`Running on Port: ${PORT}`));
//# sourceMappingURL=server.js.map