"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Inventory = require("../models/inventory");
const router = express.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const pageId = parseInt(req.query.page);
    const sortId = parseInt(req.query.sortId);
    const locationId = parseInt(req.query.locationId);
    const limit = 20;
    let currentPage = 1;
    let offset = undefined;
    if (!isNaN(pageId) && pageId > 0) {
        currentPage = pageId;
        offset = limit * (pageId - 1);
    }
    let order = [["createdAt", "desc"]];
    if (!isNaN(sortId) && sortId > 0 && sortId < 5) {
        order = sortHandler(sortId);
    }
    let where = undefined;
    if (!isNaN(locationId) && locationId > 0 && locationId < 5) {
        where = { locationId };
    }
    try {
        const data = yield Inventory.findAndCountAll({
            limit,
            offset,
            order,
            where
        });
        res.send({
            results: data.rows,
            totalPage: Math.ceil(data.count / limit),
            totalInventories: data.count,
            currentPage
        });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield Inventory.create(req.body);
        res.status(201).json({ "message": "ინვენტარი წარმატებით დაემატა", user });
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
router.delete("/:inventoryID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { inventoryID } = req.params;
    try {
        const deleted = yield Inventory.destroy({ where: { id: inventoryID } });
        if (deleted) {
            res.json({ "message": "ინვენტარი წარმატებით წაიშალა" });
        }
        else {
            res.status(404).json({ "message": `Inventory with ID: ${inventoryID} does not exist` });
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
}));
function sortHandler(id) {
    switch (id) {
        case 1:
            return [["name", "asc"]];
        case 2:
            return [["name", "desc"]];
        case 3:
            return [["price", "asc"]];
        case 4:
            return [["price", "desc"]];
        default:
            return [["createdAt", "desc"]];
    }
}
module.exports = router;
//# sourceMappingURL=inventories.js.map