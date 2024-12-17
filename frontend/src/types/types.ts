import { ReactNode } from "react";

export type NavItem = {
     to :string;
     label:string;
     icon:ReactNode
}

export type Order = {
     userId:string
     items: OrderItem[], 
     amount: number, 
     address: object, 
     status: string,
     paymentMethod: string,
      payment: boolean, 
      date: number
}

export type OrderItem = {
     _id: string,
     name: string,
     description: string,
     category: string,
     image: string,
     price: number,
     date: number,
     popular: boolean,
     quantity: number
}
export type OrderInfo = {
     orderItem:OrderItem
     orderData:OrderData

}

export type OrderData = {
     status:string,
     payment:boolean,
     date:number,
     paymentMethod:string
}

