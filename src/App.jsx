import React, { useEffect, useState } from "react";
import data from "./data/data.json";
import styled from "styled-components";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { ProductsContext } from "./ProductsContext.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ProductList from "./components/ProductList.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [products, setData] = useState(data);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList products={products} />} />
        <Route
          path="/products/:id"
          element={<ProductDetail products={products} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
