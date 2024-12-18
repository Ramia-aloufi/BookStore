import { LuSettings2 } from "react-icons/lu";
import { RiSearch2Line } from "react-icons/ri";
import { categories } from "../data";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { Book } from "../types/data";
import Item from "../components/Item";
import Footer from "../components/Footer";

const Shop = () => {
  const { books } = useContext(ShopContext);

  const [category, setCategory] = useState<string[]>([]);
  const [sortType, setSortType] = useState("relevant");

  const [filterBooks, setFilterBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;

  const toggleFilter = (value: string) => {
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const applyFilters = () => {
    let filtered = [...books];
    if (search) {
      filtered = filtered.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length) {
      filtered = filtered.filter((book) => category.includes(book.category));
    }
    return filtered;
  };

  const applySorting = (bookList: Book[]) => {
    switch (sortType) {
      case "low":
        return bookList.sort((a, b) => a.price - b.price);
      case "hight":
        return bookList.sort((a, b) => b.price - a.price);
      default:
        return bookList;
    }
  };
  useEffect(() => {
    const filtered = applyFilters();
    const sorted = applySorting(filtered);
    setFilterBooks(sorted);
    setCurrentPage(1);
  }, [category, sortType, books, search]);

  const getPaginationBooks = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return filterBooks.slice(startIndex, endIndex);
  };

  const totalPages = Math.ceil(filterBooks.length / itemPerPage);

  return (
    <section className="max-padd-container bg-white">
      <div className="pt-28">
        <div className="width-full max-w-2xl flexCenter">
          <div className="inline-flex items-center justify-center bg-primary overflow-hidden w-full rounded-full p-4 px-5">
            <div className="text-lg cursor-pointer">
              <RiSearch2Line />
            </div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search here ..."
              className="border-none outline-none w-full text-sm pl-4 bg-primary"
            />
            <div className="flexCenter cursor-pointer text-lg border-l-2 pl-2 ">
              <LuSettings2 />
            </div>
            {/* Category filter */}
          </div>
        </div>
        {/* Categories filter */}
        <div className="mt-12 mb-16">
          <h3 className="h4 mb-4 hidden sm:flex">Category</h3>
          <div className="flexCenter sm:flexStart flex-wrap gap-x-12 gap-y-4">
            {categories.map((category) => (
              <label key={category.name}>
                <input
                  value={category.name}
                  onChange={(e) => toggleFilter(e.target.value)}
                  type="checkbox"
                  className="hidden peer"
                />
                <div className="flexCenter flex-col gap-2 peer-checked:text-secondaryOne cursor-pointer">
                  <div className="bg-primary h-20 w-20 flexCenter rounded-full">
                    {category.image}
                  </div>
                  <span className="medium-14">{category.name}</span>
                </div>
              </label>
            ))}
          </div>
        </div>
        {/* Books Container */}
        <div className="mt-8">
          {/* Title & Sort */}
          <div className="flexBetween !items-start gap-7 flex-wrap pb-16 max-sm:flexCenter text-center">
            <Title
              title1={"Our"}
              titleStyle={"pb-0 text-start"}
              title2={"Book List"}
              paraStyle={"!block"}
            />
            <div className="flexCenter gap-x-2">
              <span className="hidden sm:flex medium-16">Sort by:</span>
              <select
                onChange={(e) => {
                  setSortType(e.target.value);
                }}
                className="text-sm p-2.5 outline-none bg-primary to-gray-30 rounded"
              >
                <option value="relevant">Relevant</option>
                <option value="low">Low</option>
                <option value="heigh">Heigh</option>
              </select>
            </div>
          </div>
          {/* Books */}
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 ">
            {getPaginationBooks().length > 0 ? (
              getPaginationBooks().map((book) => (
                <Item book={book} key={book._id} />
              ))
            ) : (
              <p className="">No Books founds for selected filters</p>
            )}
          </div>
        </div>
        {/* Pagination */}
        <div className="flexCenter mt-14 mb-10 gap-4">
          {/* Previous button */}
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`btn-secondary !py-1 !px-3 ${
              currentPage === 1 && "opacity-50 cursor-not-allowed"
            }`}
          >
            Previous
          </button>
          {/* Previous numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={`btn-light !py-1 !px-3 ${
                currentPage === index + 1 && "!bg-secondaryOne"
              }`}
            >
              {index + 1}
            </button>
          ))}
          {/* Next Button */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`btn-secondary !py-1 !px-3 ${
              currentPage === totalPages && "opacity-50 cursor-not-allowed"
            }`}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Shop;
