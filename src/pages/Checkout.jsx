import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const saveOrder = () => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const newOrder = {
      id: storedOrders.length + 1,
      items: cart,
      totalPrice,
      status: "Pending",
      date: new Date().toLocaleString(),
      address,
      paymentMethod,
    };
    storedOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(storedOrders));
    return newOrder;
  };

  const handlePlaceOrder = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address.");
      return;
    }

    const newOrder = saveOrder();
    setCart([]); // Clear the cart
    navigate("/order-confirmation", { state: { order: newOrder } }); // Navigate to order confirmation
  };

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center py-8">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Checkout</h2>

        {/* Product Summary */}
        <div className="mb-8 border-b pb-4">
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                </div>
              </div>
              <p className="text-lg font-semibold">₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Address Section */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">📍 Shipping Address</h3>
          <textarea
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            rows="3"
            placeholder="Enter your address..."
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Payment Options */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">💳 Payment Method</h3>
          <select
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Credit Card</option>
            <option>UPI</option>
            <option>Cash on Delivery</option>
          </select>
        </div>

        {/* Total Price and Place Order */}
        <div className="text-right">
          <h3 className="text-xl font-bold">Total: ₹{totalPrice.toFixed(2)}</h3>
          <button
            onClick={handlePlaceOrder}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            ✅ Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
