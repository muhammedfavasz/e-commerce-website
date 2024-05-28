import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./component/Header";
import Cart from "./component/Cart";
import Home from "./component/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import MainHome from "./component/Home/MainHome";
import { useContext, useEffect, useState } from "react";
import Context from "./context/Context";
import ProductDetails from "./component/Home/ProductDetails";
import Footer from "./component/Home/Footer";
import Shop from "./component/Home/Shop";
import { auth } from "./component/Home/configAdmin/fireBase";
import LoginError from "./component/Home/LoginError";

function App() {
  const [carousalData, setCarousalData] = useState([]);
  const [productData, setProductData] = useState([]);

  const user = auth.currentUser;

  const handleFetchCarousalData = async () => {
    const response = await fetch("http://localhost:3000/carousal");
    const data = await response.json();
    setCarousalData(data);
  };
  const handleFetchProductData = async () => {
    const response = await fetch("http://localhost:3000/product");
    const data = await response.json();
    setProductData(data);
  };

  useEffect(() => {
    handleFetchCarousalData();
    handleFetchProductData();
  }, []);

  localStorage.setItem("carousal", JSON.stringify(carousalData));
  localStorage.setItem("product", JSON.stringify(productData));

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainHome />} />
          {/* <Route path='/' element={<Home />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route
            path="/productdetails/:productId"
            element={<ProductDetails prod={productData} />}
          />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
