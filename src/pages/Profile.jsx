import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const navigate = useNavigate();

  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  const workshops = JSON.parse(localStorage.getItem("workshops")) || [];

  // Fetch user data from localStorage
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {
      name: "Chandan Gowda B M",
      email: "Chandan@gmail.com",
      phone: "6363694474",
      address: "Mandya",
    }
  );

  const [activeTab, setActiveTab] = useState("orders");
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleInputChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    setUser(editedUser);
    localStorage.setItem("user", JSON.stringify(editedUser));
    setIsEditing(false);
  };

  const tabButtonClass = (tab) =>
    `w-full py-2 px-4 text-left rounded-md font-medium transition ${
      activeTab === tab
        ? "bg-blue-600 text-white shadow"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
    }`;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg p-6 flex flex-col">
        {/* Profile Header */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold text-blue-700">{user.name} 👋</h1>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex flex-col gap-2">
          <button className={tabButtonClass("orders")} onClick={() => setActiveTab("orders")}>
            Orders
          </button>
          <button className={tabButtonClass("wishlist")} onClick={() => setActiveTab("wishlist")}>
            Wishlist ({wishlist.length})
          </button>
          <button className={tabButtonClass("cart")} onClick={() => setActiveTab("cart")}>
            Cart ({cart.length})
          </button>
          <button className={tabButtonClass("workshops")} onClick={() => setActiveTab("workshops")}>
            Workshops ({workshops.length})
          </button>
          <button className={tabButtonClass("payment")} onClick={() => setActiveTab("payment")}>
            Payment
          </button>
          <button className="w-full py-2 px-4 text-left bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={() => { localStorage.clear(); navigate("/login"); }}>
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white shadow-lg p-8">
        {/* Orders Section */}
        {activeTab === "orders" && (
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Your Orders 📦</h2>
            {orders.length === 0 ? (
              <p className="text-gray-500">No orders yet.</p>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="border rounded-md p-4 bg-gray-50 shadow-sm mb-2">
                  <p><strong>Order ID:</strong> {order.id}</p>
                  <p><strong>Status:</strong> {order.status}</p>
                  <p><strong>Total:</strong> ₹{order.totalPrice.toFixed(2)}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Wishlist Section */}
        {activeTab === "wishlist" && (
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Wishlist ❤️</h2>
            {wishlist.length === 0 ? (
              <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
              wishlist.map((item, index) => (
                <div key={index} className="border rounded-md p-4 bg-gray-50 shadow-sm mb-2">
                  <p><strong>{item.name}</strong></p>
                  <p>Price: ₹{item.price}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Cart Section */}
        {activeTab === "cart" && (
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Cart 🛒</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <div key={index} className="border rounded-md p-4 bg-gray-50 shadow-sm mb-2">
                  <p><strong>{item.name}</strong></p>
                  <p>Price: ₹{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Workshops Section */}
        {activeTab === "workshops" && (
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Workshops 🎨</h2>
            {workshops.length === 0 ? (
              <p className="text-gray-500">No registered workshops yet.</p>
            ) : (
              workshops.map((workshop, index) => (
                <div key={index} className="border rounded-md p-4 bg-gray-50 shadow-sm mb-2">
                  <p><strong>{workshop.title}</strong></p>
                  <p>Date: {workshop.date}</p>
                  <p>Location: {workshop.location}</p>
                </div>
              ))
            )}
          </div>
        )}

        {/* Payment Section */}
        {activeTab === "payment" && (
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Payment Options 💳</h2>
            <p className="text-gray-600">Manage your payment methods here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
