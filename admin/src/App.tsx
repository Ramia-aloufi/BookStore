import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import AddBook from "./pages/AddBook"
import List from "./pages/List"
import Order from "./pages/Order"
import { ToastContainer } from "react-toastify"
import Login from "./components/Login"
import { useEffect, useState } from "react"
function App() {
  const [token, setToken] = useState(localStorage.getItem("token")?
  localStorage.getItem("token"):"")
  useEffect(()=>{ 
    if(token)
    localStorage.setItem('token',token)

  },[token])
return(
<main>
  <ToastContainer/>  
  {token === "" ?(
    <Login setToken={setToken}/>
  ):(
  <div className="bg-primary text-[#404040]">
    <div className="mx-auto max-w-[1440] flex flex-col sm:flex-row">
      <Sidebar setToken={setToken}/>
      <Routes>
        <Route path="/" element={<AddBook token={token}/>} />
        <Route path="/list" element={<List token={token}/>} />
        <Route path="/order" element={<Order token={token}/>} />


      </Routes>

    </div>
  </div>
  )}
</main>
)
}

export default App
