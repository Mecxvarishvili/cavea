// const {Column, DataType, Model, Table} = require("sequelize-typescript")
import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table({
    tableName: "inventories"
})

class Inventory extends Model {
    @Column({
        type: DataType.STRING,
    })
    name: string

    @Column({
        type: DataType.STRING,
    })
    location: string

    @Column({
        type: DataType.FLOAT,
    })
    price: number
}

module.exports = Inventory

export {}

