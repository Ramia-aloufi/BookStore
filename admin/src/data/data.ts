  export const backend_url = import.meta.env.VITE_BACKEND_URL;
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
export const currency = "$"
