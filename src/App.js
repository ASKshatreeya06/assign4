import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./form/Login";
import Sinup from "./form/Sinup";
import Salentry from "./form/Salentry";
import Tsales from "./components/Tsales";
import Tdrevenue from "./components/Tdrevenue";
import { useState } from "react";



function App() {
  const [products, setProducts] = useState([]);
  console.log(products)
  return (

    <BrowserRouter>
      <Nav />
      <Routes>

        <Route path="/" element={<Salentry pdata={setProducts}/>} />
        <Route path="/tsales" element={<Tsales products={products} />} />
        <Route path="/tdrevenue" element={<Tdrevenue products={products}/>} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Sinup />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
