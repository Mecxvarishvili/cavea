const express = require("express")
const Inventory = require("../models/inventory")
const router = express.Router()

router.get("/", async (req, res) => {
    const pageId = parseInt(req.query.page)
    const sortId = parseInt(req.query.sortId)
    const locationId = parseInt(req.query.locationId)
    const limit = 20

    let currentPage: number = 1
    
    let offset: undefined | number = undefined
    if(!isNaN(pageId) && pageId > 0) {
        currentPage = pageId
        offset = limit * (pageId - 1)
    }

    let order: undefined | string[][] = [["createdAt", "desc"]]
    if(!isNaN(sortId) && sortId > 0 && sortId < 5 ) {
        order = sortHandler(sortId)
    }

    let where: undefined | {locationId: number} | string = undefined
    if(!isNaN(locationId) && locationId > 0 && locationId < 5) {
        where = {locationId}
    }
    try {
        const data = await Inventory.findAndCountAll({
            limit,
            offset,
            order,
            where
        })
        res.send({
            results: data.rows,
            totalPage: Math.ceil(data.count / limit),
            totalInventories: data.count,
            currentPage
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    try {
        const user = await Inventory.create(req.body)
    res.status(201).json({"message": "ინვენტარი წარმატებით დაემატა", user})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete("/:inventoryID", async (req, res) => {
    const { inventoryID } = req.params
    try {
        const deleted = await Inventory.destroy({where: {id: inventoryID}})
        if(deleted) {
            res.json({"message": "ინვენტარი წარმატებით წაიშალა"})
        } else {
            res.status(404).json({"message": `Inventory with ID: ${inventoryID} does not exist`})
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

function sortHandler (id: number) {
    switch (id) {
        case 1 :
            return [["name", "asc"]]
        case 2:
            return [["name", "desc"]]
        case 3:
            return [["price", "asc"]]
        case 4: 
            return [["price", "desc"]]
        default: 
            return [["createdAt", "desc"]]
    }
}

module.exports = router

export {}