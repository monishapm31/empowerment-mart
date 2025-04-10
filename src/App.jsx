import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart"; 
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import Checkout from "./pages/Checkout";
import UploadProduct from "./pages/UploadProduct";
import OrderConfirmation from "./pages/OrderConfirmation"; 
import Profile from "./pages/Profile"; 
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/:category" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/upload-product" element={<UploadProduct />} />
         <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/profile" element={<Profile />} />
      

        </Routes>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
