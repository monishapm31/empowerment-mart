import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleProductUpload = (e) => {
    e.preventDefault();

    if (!title || !description || !price || !image) {
      setError("All fields are required.");
      return;
    }

    const sellerEmail = localStorage.getItem("email");

    const pendingProducts = JSON.parse(localStorage.getItem("pendingProducts")) || [];

    const newProduct = {
      id: Date.now(),
      title,
      description,
      price,
      image: URL.createObjectURL(image), // Temporary preview image
      seller: sellerEmail,
      status: "pending", // to track approval
    };

    pendingProducts.push(newProduct);
    localStorage.setItem("pendingProducts", JSON.stringify(pendingProducts));

    alert("Product submitted! Waiting for admin approval.");
     // ✅ Redirect to Admin Dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-amber-100 to-teal-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Upload New Product</h2>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <form onSubmit={handleProductUpload} className="space-y-4">
          <input
            type="text"
            placeholder="Product Title"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Product Description"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-3 border rounded-lg"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button
            type="submit"
            className="w-full bg-teal-600 text-white p-3 rounded-lg hover:bg-teal-700 transition"
          >
            Submit for Approval
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadProduct;
