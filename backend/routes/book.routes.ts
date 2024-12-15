
import express from "express"
import { createBook, deleteBook, getAllBook, getBookById, updateBook } from "../controllers/book.controller"
import { upload } from "../middleware/multer"
import { isAdmin } from "../middleware/adminAuth"
const bookRoute = express.Router()

bookRoute.post('/create',isAdmin,upload.single('image'),createBook)
bookRoute.put('/update',isAdmin,updateBook)
bookRoute.delete('/delete',isAdmin,deleteBook)
bookRoute.get('/one',getBookById)
bookRoute.get('/all',getAllBook)



export default bookRoute