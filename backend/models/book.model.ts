import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
name:{type:String, required:true},
description:{type:String, required:true},
category:{type:String, required:true},
image:{type:String, required:true},
price:{type:Number, required:true},
date:{type:Number, required:true},
popular:{type:Boolean}
})


export const Book = mongoose.models['book'] || mongoose.model('book',BookSchema)

export interface IBook extends Document {
    name:string,
    description:string,
    category:string,
    image:string,
    price:number,
    date:number,
    popular:boolean
  }