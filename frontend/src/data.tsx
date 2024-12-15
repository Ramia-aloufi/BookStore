import { GiMagicBroom } from "react-icons/gi";
import { Book, Category } from "./types/data";
import { FaChildren } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import book_1 from "./assets/book/book_1.png"
import book_2 from "./assets/book/book_2.jpeg"
import book_3 from "./assets/book/book_3.webp"
import book_4 from "./assets/book/book_4.jpg"
import book_5 from "./assets/book/book_5.jpg"
import book_6 from "./assets/book/book_6.png"
import book_7 from "./assets/book/book_7.jpg"
import book_8 from "./assets/book/book_8.jpg"
import book_9 from "./assets/book/book_9.jpg"
import book_10 from "./assets/book/book_10.webp"
import book_11 from "./assets/book/book_11.jpg"
import book_12 from "./assets/book/book_12.jpg"
import book_13 from "./assets/book/book_13.jpg"
import book_14 from "./assets/book/book_14.jpg"
import book_15 from "./assets/book/book_15.jpg"

export type  Cart = {
  [bookId: string]: number;
}
export const categories:Category[] = [
    {
        name:"Fantasy",
        image:<GiMagicBroom className="object-cover h-10 w-10"/>
    },
    {
        name:"Children's Books",
        image:<FaChildren  className="object-cover h-10 w-10"/>
    },{
        name:"Science & Technology",
        image:<HiAcademicCap className="object-cover h-10 w-10" />
    }
]

export const books:Book[]= 
[
  {
    _id: "1",
    name: "The Great Gatsby",
    image: book_1,
    price: 15.99,
    description: "A classic novel set in the Jazz Age, exploring themes of wealth and ambition.",
    category: "Classics",
    date: new Date("2023-05-10"),
    popular: true
  },
  {
    _id: "2",
    name: "1984",
    image: book_2,
    price: 12.99,
    description: "A dystopian novel depicting a totalitarian regime and the fight for freedom.",
    category: "Science Fiction",
    date: new Date("2023-04-15"),
    popular: true
  },
  {
    _id: "3",
    name: "The Catcher in the Rye",
    image: book_3,
    price: 14.49,
    description: "A story of teenage rebellion and self-discovery.",
    category: "Classics",
    date: new Date("2023-03-20"),
    popular: false
  },
  {
    _id: "4",
    name: "To Kill a Mockingbird",
    image: book_4,
    price: 18.5,
    description: "A compelling story about racial injustice in the Deep South.",
    category: "Historical Fiction",
    date: new Date("2023-06-01"),
    popular: true
  },
  {
    _id: "5",
    name: "Harry Potter and the Sorcerer's Stone",
    image: book_5,
    price: 25.99,
    description: "The first book in the Harry Potter series, introducing the magical world.",
    category: "Fantasy",
    date: new Date("2023-07-18"),
    popular: true
  },
  {
    _id: "6",
    name: "The Silent Patient",
    image: book_6,
    price: 20.0,
    description: "A psychological thriller about a woman who stops speaking after a horrific act.",
    category: "Mystery & Thriller",
    date: new Date("2023-02-25"),
    popular: false
  },
  {
    _id: "7",
    name: "Sapiens: A Brief History of Humankind",
    image:book_7,
    price: 22.99,
    description: "A thought-provoking exploration of human history.",
    category: "Science & Technology",
    date: new Date("2023-01-10"),
    popular: true
  },
  {
    _id: "8",
    name: "Becoming",
    image: book_8,
    price: 19.99,
    description: "The memoir of Michelle Obama.",
    category: "Biography & Memoir",
    date: new Date("2023-03-05"),
    popular: true
  },
  {
    _id: "9",
    name: "Goodnight Moon",
    image: book_9,
    price: 8.99,
    description: "A beloved children's bedtime story.",
    category: "Children's Books",
    date: new Date("2023-07-01"),
    popular: true
  },
  {
    _id: "10",
    name: "Atomic Habits",
    image: book_10,
    price: 16.99,
    description: "A guide to building good habits and breaking bad ones.",
    category: "Self-Help",
    date: new Date("2023-06-15"),
    popular: true
  },
  {
    _id: "11",
    name: "The Art of War",
    image: book_11,
    price: 10.99,
    description: "An ancient Chinese military treatise attributed to Sun Tzu.",
    category: "Philosophy",
    date: new Date("2023-08-30"),
    popular: false
  },
  {
    _id: "12",
    name: "Dune",
    image: book_12,
    price: 24.99,
    description: "A science fiction epic set on the desert planet Arrakis.",
    category: "Science Fiction",
    date: new Date("2023-09-10"),
    popular: true
  },
  {
    _id: "13",
    name: "The Road",
    image: book_13,
    price: 14.99,
    description: "A post-apocalyptic tale of survival and love.",
    category: "Classics",
    date: new Date("2023-04-20"),
    popular: false
  },
  {
    _id: "14",
    name: "Percy Jackson: The Lightning Thief",
    image: book_14,
    price: 17.99,
    description: "The start of a mythological adventure for young readers.",
    category: "Fantasy",
    date: new Date("2023-08-01"),
    popular: true
  },
  {
    _id: "15",
    name: "The Alchemist",
    image: book_15,
    price: 12.49,
    description: "A philosophical tale about pursuing dreams.",
    category: "Philosophy",
    date: new Date("2023-07-22"),
    popular: true
  }
];

  