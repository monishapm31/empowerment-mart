import React from "react";

const OrderItem = ({ order }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold">Order ID: {order.id}</h3>
      <p className="text-gray-600">Date: {order.date}</p>
      <p className="text-gray-600">Status: <span className={`font-bold ${order.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{order.status}</span></p>
      <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
      <p className="text-gray-600">Address: {order.address}</p>
      <h4 className="font-bold mt-4">Order Summary:</h4>
      {order.items.map((item, index) => (
        <div key={index} className="flex justify-between py-2">
          <div className="flex items-center gap-4">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-md" />
            <div>
              <p>{item.name}</p>
              <p className="text-gray-600">₹{item.price} x {item.quantity}</p>
            </div>
          </div>
          <p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <h4 className="font-bold mt-4">Total Price: ₹{order.totalPrice.toFixed(2)}</h4>
    </div>
  );
};

export default OrderItem;
