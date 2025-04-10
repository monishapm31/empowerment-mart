import React, { useEffect, useState } from "react";

const OrderStatus = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">📦 Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">No orders found. Start shopping now!</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Order ID: {order.id}</h3>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p><strong>Total Price:</strong> ₹{order.totalPrice.toFixed(2)}</p>

              <div className="mt-4">
                <h4 className="text-lg font-semibold">Items:</h4>
                {order.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b">
                    <div className="flex items-center gap-4">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <p className="text-lg">{item.name}</p>
                        <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-gray-800">₹{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderStatus;