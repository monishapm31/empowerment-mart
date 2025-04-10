import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { products } from "../data/products";
import { Heart } from "lucide-react";

const ProductPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const approvedProducts = products.filter(
      (product) => product.category.toLowerCase() === category && product.approved
    );
    setFilteredProducts(approvedProducts);
  }, [category]);

  const handleBuyNow = (product) => {
    navigate("/checkout", { state: { product } });
  };

  const isInWishlist = (productId) => wishlist.some((item) => item.id === productId);

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8 capitalize">{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products available in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition relative">
              {/* Wishlist Icon */}
              <button
                onClick={() => (isInWishlist(product.id) ? removeFromWishlist(product) : addToWishlist(product))}
                className="absolute top-4 right-4 p-2  "
              >
                <Heart size={20} color={isInWishlist(product.id) ? "red" : "white"} fill={isInWishlist(product.id) ? "red" : "none"} />
              </button>

              <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mt-2">₹{product.price}</p>
                <p className="text-gray-500 mt-2 text-sm">{product.description}</p>

               
                {/* Add to Cart and Buy Now Buttons */}
                <div className="flex justify-center gap-4 mt-4">
                  {/* Add to Cart */}
                  <button
                    onClick={() => addToCart(product)}
                    className={`py-2 px-4 rounded-lg text-white text-sm ${
                      cart.some((item) => item.id === product.id)
                        ? "bg-yellow-500 cursor-default"
                        : "bg-yellow-500 hover:bg-yellow-600"
                    } transition`}
                    disabled={cart.some((item) => item.id === product.id)}
                  >
                    {cart.some((item) => item.id === product.id) ? "Added to Cart" : "Add to Cart"}
                  </button>

                  {/* Buy Now */}
                  <button
                    onClick={() => handleBuyNow(product)}
                    className="py-2 px-4 rounded-lg bg-green-500 text-white text-sm hover:bg-green-600 transition"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
