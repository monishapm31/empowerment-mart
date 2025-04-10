import React, { useState, useEffect } from "react";
import { getProducts, getOrders, updateOrderStatus } from "../data/products";

const AdminDashboard = () => {
  const [pendingCrafts, setPendingCrafts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [orderCounts, setOrderCounts] = useState({ Pending: 0, Shipped: 0, Delivered: 0 });

  // Workshop State
  const [newWorkshop, setNewWorkshop] = useState({ title: "", location: "", date: "", description: "" });
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    // Fetch products
    const allProducts = getProducts();
    setPendingCrafts(allProducts.filter((product) => !product.approved));

    // Fetch orders
    const orderData = getOrders();
    setOrders(orderData);

    // Calculate total sales & revenue
    setTotalSales(orderData.length);
    setTotalRevenue(orderData.reduce((sum, order) => sum + order.totalPrice, 0));

    // Calculate order counts by status
    const counts = { Pending: 0, Shipped: 0, Delivered: 0 };
    orderData.forEach(order => counts[order.status]++);
    setOrderCounts(counts);

    // Load workshops from localStorage
    const savedWorkshops = JSON.parse(localStorage.getItem("workshops")) || [];
    setWorkshops(savedWorkshops);
  }, []);

  // Approve a craft
  const approveCraft = (id) => {
    const updatedProducts = getProducts().map((product) =>
      product.id === id ? { ...product, approved: true } : product
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setPendingCrafts(updatedProducts.filter((product) => !product.approved));
  };

  // Handle order status update
  const changeOrderStatus = (id, status) => {
    updateOrderStatus(id, status);
    const updatedOrders = getOrders();
    setOrders(updatedOrders);

    // Update order count
    const newCounts = { Pending: 0, Shipped: 0, Delivered: 0 };
    updatedOrders.forEach(order => newCounts[order.status]++);
    setOrderCounts(newCounts);
  };

  // Handle workshop form submit
  const handleWorkshopSubmit = (e) => {
    e.preventDefault();
    const newWs = {
      ...newWorkshop,
      id: Date.now()
    };
    const updatedWorkshops = [...workshops, newWs];
    localStorage.setItem("workshops", JSON.stringify(updatedWorkshops));
    setWorkshops(updatedWorkshops);
    setNewWorkshop({ title: "", location: "", date: "", description: "" });
  };

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Admin Dashboard</h2>

      {/* Sales Analytics Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-blue-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Sales</h3>
          <p className="text-2xl font-bold text-blue-600">{totalSales}</p>
        </div>
        <div className="bg-green-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Total Revenue</h3>
          <p className="text-2xl font-bold text-green-600">₹{totalRevenue}</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Pending Orders</h3>
          <p className="text-2xl font-bold text-yellow-600">{orderCounts.Pending}</p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Shipped Orders</h3>
          <p className="text-2xl font-bold text-purple-600">{orderCounts.Shipped}</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Delivered Orders</h3>
          <p className="text-2xl font-bold text-gray-600">{orderCounts.Delivered}</p>
        </div>
      </div>

      {/* Pending Crafts Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Pending Crafts</h3>
        {pendingCrafts.length === 0 ? (
          <p className="text-gray-600">No pending crafts.</p>
        ) : (
          <div className="space-y-3">
            {pendingCrafts.map((craft) => (
              <div key={craft.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div>
                  <h3 className="text-lg font-semibold">{craft.name}</h3>
                  <p className="text-gray-600">Category: {craft.category}</p>
                  <p className="text-gray-600">₹{craft.price}</p>
                </div>
                <button
                  onClick={() => approveCraft(craft.id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                >
                  Approve
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Orders Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Orders</h3>
        {orders.length === 0 ? (
          <p className="text-gray-600">No orders yet.</p>
        ) : (
          <div className="space-y-3">
            {orders.map((order) => (
              <div key={order.id} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-lg font-semibold">Order #{order.id}</h3>
                <p className="text-gray-600">Total: ₹{order.totalPrice}</p>
                <p className="text-gray-600">Status: {order.status}</p>
                <select
                  className="mt-2 p-2 border rounded"
                  value={order.status}
                  onChange={(e) => changeOrderStatus(order.id, e.target.value)}
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Workshops Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-700">Host a Workshop 🎨</h3>
        <form onSubmit={handleWorkshopSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Workshop Title"
            value={newWorkshop.title}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, title: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="text"
            placeholder="Location"
            value={newWorkshop.location}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, location: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <input
            type="date"
            value={newWorkshop.date}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, date: e.target.value })}
            className="p-2 border rounded"
            required
          />
          <textarea
            placeholder="Description"
            value={newWorkshop.description}
            onChange={(e) => setNewWorkshop({ ...newWorkshop, description: e.target.value })}
            className="p-2 border rounded col-span-1 md:col-span-2"
            required
          />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
          >
            Host Workshop
          </button>
        </form>

        {/* Display hosted workshops */}
        <h4 className="text-xl font-semibold mb-2 text-gray-700">Hosted Workshops 📋</h4>
        {workshops.length === 0 ? (
          <p className="text-gray-500">No workshops hosted yet.</p>
        ) : (
          <ul className="space-y-3">
            {workshops.map((ws) => (
              <li key={ws.id} className="bg-orange-100 p-4 rounded-lg shadow-sm">
                <h5 className="font-bold text-orange-800">{ws.title}</h5>
                <p className="text-sm text-gray-700">{ws.description}</p>
                <p className="text-sm text-gray-600">📍 {ws.location} | 📅 {ws.date}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Logout Button */}
      <div className="text-center mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
