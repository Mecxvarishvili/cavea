import { Table, Column, Model, DataType } from 'sequelize-typescript';
@Table({
    tableName: "inventories"
})

class Inventory extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    locationId: number

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    price: number
}

module.exports = Inventory

export {}

