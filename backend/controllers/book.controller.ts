import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import { data } from "../config/data";
import { Book, IBook } from "../models/book.model";

export const createBook = async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, popular } = req.body;
    let imageUrl = "https://via.placeholder.com/150"; // Default
    if (req.file) {
      console.log("Uploaded File:", req.file);
      imageUrl = await cloudinary.uploader
        .upload(req.file.path, { resource_type: "image" })
        .then((res) => res.secure_url);
    }
    const newBook = {
      name,
      description,
      category,
      price: Number(price),
      popular: popular === "true" ? true : false,
      image: imageUrl,
      date: Date.now(),
    };

    const book = new Book(newBook);
    await book.save();
    res.json({ success: true, message: "product created successfully" });
  } catch (error) {
    console.log((error as Error).message);
    res.json({
      success: false,
      message: (error as Error).message || "An unexpected error occurred",
    });
  }
};
export const updateBook = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    console.log((error as Error).message);
    res.json({
      success: false,
      message: (error as Error).message || "An unexpected error occurred",
    });
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  try {
    await Book.findOneAndDelete(req.body.id);
    res.json({ success: true, message: "product deleted successfully" });
  } catch (error) {
    console.log((error as Error).message);
    res.json({
      success: false,
      message: (error as Error).message || "An unexpected error occurred",
    });
  }
};
export const getAllBook = async (req: Request, res: Response) => {
  try {
    const books = await Book.find();
    res.json({ success: true, book: books });
  } catch (error) {
    console.log((error as Error).message);
    res.json({
      success: false,
      message: (error as Error).message || "An unexpected error occurred",
    });
  }
};
export const getBookById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const product = await Book.findById(productId);
    res.json({ success: true, product });
  } catch (error) {
    console.log((error as Error).message);
    res.json({
      success: false,
      message: (error as Error).message || "An unexpected error occurred",
    });
  }
};
