import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaHome } from "react-icons/fa";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  if (!order) {
    return <p className="text-center text-gray-500">Order not found. Please try again.</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex justify-center items-center py-8">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-xl p-10">
        <div className="text-center mb-6">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
          <h2 className="text-4xl font-bold text-gray-800 mt-4">Order Confirmed!</h2>
          <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been placed successfully.</p>
        </div>

        {/* Order Details */}
        <div className="mb-6 border-t border-gray-200 pt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Order Summary</h3>
          <p><strong>🆔 Order ID:</strong> {order.id}</p>
          <p><strong>📦 Status:</strong> <span className="text-yellow-500">{order.status}</span></p>
          <p><strong>💰 Total:</strong> ₹{order.totalPrice.toFixed(2)}</p>
          <p><strong>🏠 Address:</strong> {order.address}</p>
          <p><strong>💳 Payment Method:</strong> {order.paymentMethod}</p>
        </div>

        {/* Items List */}
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-700 mb-3">Items Ordered:</h4>
          <ul className="divide-y divide-gray-200">
            {order.items.map((item, index) => (
              <li key={index} className="py-3 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
                  <div>
                    <p className="text-gray-800 font-medium">{item.name}</p>
                    <p className="text-gray-600">₹{item.price} x {item.quantity || 1}</p>
                  </div>
                </div>
                <span className="text-gray-800 font-semibold">₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/Home")}
          className="mt-6 flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg"
        >
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;