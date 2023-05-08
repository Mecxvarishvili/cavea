const express = require("express")
const Inventory = require("../models/inventory")
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const data = await Inventory.findAll()
        res.send(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const user = await Inventory.create(req.body)
    res.status(201).json({message: "User create successfully", user})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete("/:inventoryID", async (req, res) => {
    const { inventoryID } = req.params
    try {
        const deleted = await Inventory.destroy({where: {id: inventoryID}})
        if(deleted) {
            res.json({"message": "Deleted successfully"})
        } else {
            res.status(404).json({"message": `Inventory with ID: ${inventoryID} does not exist`})
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router

export {}