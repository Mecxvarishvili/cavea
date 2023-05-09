import React from "react"
import { FormValueTypes } from "../serialize/types"

export const api = {
    baseApi: async (method: "GET" | "POST" | "DELETE", url?: string, body?: FormValueTypes) => {
        const headers = {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       }
        try {
            const response = await fetch("http://localhost:8000/inventories"+ url, {
                method,
                headers,
                body: JSON.stringify(body)
            })
            const json = await response.json()
            return json
        } catch (err) {
            return err
        }
    },
    getInventories: async (search: string) => {
        const response = await api.baseApi("GET", search)
        return response
    },
    createInventory: async (body: FormValueTypes | any) => {
        const response = await api.baseApi("POST", "", body)
        return response
    },
    deleteInventory: async (id: number) => {
        const response = await api.baseApi("DELETE", `/${id}`)
        return response
    }
}