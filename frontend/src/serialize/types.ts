export type SelectOptionsType = {
    label: string,
    value: number
}

export type FormItemType = {
    type: string,
    id: string,
    label: string,
    options?: SelectOptionsType[]
}

export type FormValueTypes = {
    locationId: number ,
    name: string,
    price: number
}

export type DataType = {
    id: number,
    name: string,
    locationId: number,
    price: number

}

export type ResponseDataType = {
    results: DataType[]
    totalPage: number,
    totalInventories: number,
    currentPage: number
}

export type FormType = FormItemType[]