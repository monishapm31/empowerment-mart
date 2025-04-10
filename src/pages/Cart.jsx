import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Quantity functions added

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🛒 Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600">Your cart is empty.</p>
            <Link
              to="/categories"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm mb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price}</p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => decreaseQuantity(item)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item)}
                        className="bg-gray-300 text-gray-700 px-2 py-1 rounded-r"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Remove
                  </button>
                  
                </div>
              </div>
            ))}
            {/* Total Price Section */}
            <div className="mt-6 p-4 bg-gray-200 rounded-lg text-right">
              <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        )}

        {/* Buttons for Checkout & Continue Shopping */}
        {cart.length > 0 && (
          <div className="mt-6 flex justify-between">
            <Link
              to="/categories"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Continue Shopping
            </Link>
            <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
  Buy Now
</Link>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
