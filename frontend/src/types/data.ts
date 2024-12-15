import { ReactNode } from "react"

export type Category = {
    name:CategoryName,
    image:ReactNode
}
export type CategoryName = 
  | "Classics" 
  | "Science Fiction" 
  | "Fantasy" 
  | "Mystery & Thriller" 
  | "Historical Fiction" 
  | "Biography & Memoir" 
  | "Self-Help" 
  | "Children's Books" 
  | "Science & Technology" 
  | "Philosophy";

export type Book = {
    _id:string,
    name:string,
    image:string
    price:number
    description:string
    category:CategoryName
    date:Date
    popular:boolean
}