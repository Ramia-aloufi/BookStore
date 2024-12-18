import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import { ToastContainer } from "react-toastify";
import Orders from "./pages/Orders";
import Verify from "./pages/Verify";

function App() {
  return (
    <main className="overflow-hidden bg-primary ">
      <ToastContainer/>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/place-order" element={<PlaceOrder />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/verify" element={<Verify />}></Route>

      </Routes>
    </main>
  );
}

export default App;
