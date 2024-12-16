import axios from "axios";
import { useEffect, useState } from "react";
import { backend_url, Book, currency } from "../data/data";
import { TbTrash } from "react-icons/tb";
import { toast } from "react-toastify";

type ListProps = {
  token: string | null;
};
const List = ({ token }: ListProps) => {
  const [list, setList] = useState<Book[]>([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backend_url}/api/book/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.success) {
        setList(response.data.book);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeProduct = async (id: string) => {
    try {
      const response = await axios.post(
        `${backend_url}/api/book/delete`,
        { id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if(response.data.success){
          toast.success(response.data.message)
          await fetchList()
        }else{
          toast.error(response.data.message)
        }
    } catch (error) {
      toast.error((error as Error).message)
    }
  };
  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="px-2 sm:px-8 mt-4 sm:mt-14">
      <div className="flex flex-col gap-2">
        <div
          className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr] items-center
py-1 px-2 bg-white bold-14 sm:bold-15 mb-1 rounded"
        >
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>Action</h5>
        </div>
        {/* Book list */}
        {list.map((item) => (
          <div
            key={item._id}
            className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3.5fr_1.5fr_1fr_1fr] items-center
p-1 bg-white rounded-xl"
          >
            <img src={item.image} className="w-12 rounded-lg" />
            <h5 className="text-sm font-semibold">{item.name}</h5>
            <p className="font-semibold">{item.category}</p>
            <div className="text-sm font-semibold">
              {currency}
              {item.price}
            </div>
            <div className="text-right cursor-pointer md:text-center text-lg">
              <TbTrash onClick={() => removeProduct(item._id)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
