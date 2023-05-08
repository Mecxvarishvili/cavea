const express = require("express")
const Inventory = require("../models/inventory")
const router = express.Router()

router.get("/", queryHandler(), async (req, res) => {
    res.send(res.data)
})

router.post("/", async (req, res) => {
    try {
        const user = await Inventory.create(req.body)
    res.status(201).json({"message": "User created successfully", user})
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

function queryHandler() {
    return async (req, res, next) => {
        const { page, locationId, sortId } = req.query
        
        const order: string[][] = sortHandler(parseInt(sortId))
        const where: undefined | Object = locationHandler(parseInt(locationId))
        const limit = 5
        const offset: undefined | number = pageHandler(page, limit)

        try {
            const data = await Inventory.findAll({
                where,
                order,
                offset,
                limit,
            })

            res.data = paginationHandler(parseInt(page), data, limit)
            next()
        } catch (e) {
            res.status(500).json(e)
        }
        next()
    }
}
function locationHandler(locationId: number) {
    if(locationId) return {locationId}

    return undefined
}

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

function pageHandler (page: number | undefined, limit: number) {
    if(page) {
        return limit * (page - 1)
    }
    return undefined
}

function paginationHandler (page, data, limit) {
    let paginatedData: {results: {}, nextPage?: number, prevPage?: number} = {results: data}
    

    if(page * limit < data.length) {
        paginatedData.nextPage = page + 1
    }

    if(page > 1) {
        paginatedData.prevPage = page - 1
    }


    return data

}

module.exports = router

export {}