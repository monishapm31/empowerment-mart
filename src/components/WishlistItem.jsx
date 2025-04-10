import React from "react";
import { useCart } from "../context/CartContext"; // Access Cart Context
import { useWishlist } from "../context/WishlistContext"; // Access Wishlist Context

const ProductCard = ({ product, onProductClick }) => {
  const { addToCart } = useCart();  // Use Cart Context
  const { addToWishlist } = useWishlist();  // Use Wishlist Context

  return (
    <div
      onClick={onProductClick}
      className="bg-white p-4 shadow-lg rounded-lg cursor-pointer hover:bg-gray-100"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="text-lg font-bold text-gray-800 mt-4">{product.name}</h3>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="text-xl font-semibold text-gray-800 mt-4">${product.price}</p>
      
      {/* Add to Cart button */}
      <button
        onClick={(e) => { 
          e.stopPropagation();
          addToCart(product);
        }}
        className="bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>

      {/* Add to Wishlist button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToWishlist(product); // Add to Wishlist
        }}
        className="bg-yellow-500 text-white p-2 mt-2 rounded hover:bg-yellow-600"
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default ProductCard;