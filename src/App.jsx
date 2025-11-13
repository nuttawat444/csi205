import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Components from "./pages/Components";
import Home from "./pages/Home";
import Animation from "./pages/Animation";
import Calculator from "./pages/Calculator";
import ForwardToHome from "./pages/ForwardToHome";
import AppLayout from "./layouts/AppLayout";
import Todos from "./pages/Todos";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Login from "./pages/Login";
import { fetchProducts } from "./data/products";

function App() {
  const [token, setToken] = useState("");
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const [role , setRole] = useState("");

  useEffect(() => setProducts(fetchProducts()), []);
  useEffect(() => console.log(products), [products]);

  if (token === "") {
    return <Login setToken={setToken} setRole = {setRole}/>
  } else {
    return (
      <BrowserRouter basename="/csi205/">
        <Routes>
          <Route element={<AppLayout products={products} carts={carts} setToken={setToken}/>}>
            <Route path="home" element={<Home />} />
            <Route path="components" element={<Components />} />
            <Route path="Animation" element={<Animation />} />
            <Route path="Calculator" element={<Calculator />} />
            <Route path="todos" element={<Todos />} />
            <Route
              path="products"
              element={
                <Products
                  products={products}
                  carts={carts}
                  setCarts={setCarts}
                />
              }
            />
            <Route
              path="carts"
              element={<Carts carts={carts} setCarts={setCarts} />}
            />
            <Route path="*" element={<ForwardToHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
