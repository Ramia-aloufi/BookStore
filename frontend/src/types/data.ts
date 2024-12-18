import { ReactNode } from "react"

export type Category = {
    name:string,
    image:ReactNode
}


export type Book = {
    _id:string,
    name:string,
    image:string
    price:number
    description:string
    category:string
    date:Date
    popular:boolean
}