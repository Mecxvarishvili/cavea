import React from "react"
import { FormValueTypes } from "../serialize/types"

export const api = {
    baseApi: async (method: "GET" | "POST" | "DELETE", body?: FormValueTypes) => {
        const headers = {
         'Content-Type': 'application/json',
         'Accept': 'application/json',
       }
        const response = await fetch("http://localhost:8000/inventories", {
            method,
            headers,
            body: JSON.stringify(body)
        })
        const json = await response.json()
        return json
    },
    getInventories: async () => {
        const response = await api.baseApi("GET")
        return response
    },
    createInventory: async (body: FormValueTypes | any) => {
        const response = await api.baseApi("POST", body)
        return response
    }
}