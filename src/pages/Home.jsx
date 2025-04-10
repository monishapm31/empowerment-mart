import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react"; // Importing from lucide-react

const Home = () => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-cover  sticky top-0 z-50 w-full">
        <div className="container mx-auto flex justify-between items-center py-4 px-8">
          {/* Logo */}
          <Link to="/">
            <img src="/images/L1.png" alt="Craft Shop Logo" className="h-15 w-full" />
          </Link>

          {/* Search Bar */}
          <div className="flex flex-grow max-w-lg mx-8">
            <input
              type="text"
              placeholder="Search for Craft Items"
              className="w-full border border-gray-300 rounded-l-md px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-700 text-white px-4 rounded-r-md hover:bg-blue-800 transition">
              Search
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-6 items-center">
            <Link to="/" className="text-gray-800 hover:text-blue-700">Home</Link>
            <Link to="/categories" className="text-gray-800 hover:text-blue-700">Categories</Link>
            <Link to="/wishlist" className="text-gray-800 hover:text-blue-700">Wishlist</Link>
            <Link to="/cart" className="text-gray-800 hover:text-blue-700">Cart</Link>
            
          {/* Profile Section with Dropdown */}
           <div className="relative">
              <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="focus:outline-none">
                <UserCircle className="h-8 w-8 text-blue-800 hover:text-orange-500" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
                  <Link to="/profile" className="green px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</Link>
                  <button onClick={handleLogout} className="green w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Logout</button>
                </div>
              )}
           
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-cover bg-center h-[50vh] flex items-center justify-end pr-40 text-center text-black" style={{ backgroundImage: "url('/images/ba2.jpg')" }}>
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">The Empower Shop</h1>
          <p className="text-xl mt-4 font-bold">What You buy today could rewrite someones's tomorrow</p>
          <Link to="/categories" className="mt-6 inline-block bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-lg text-lg font-semibold transition">Explore Now</Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Feature Card */}
            {[
              { image: '/images/q1.jpg', title: 'Premium Quality', description: 'Our handmade crafts are made with love and care.' },
              { image: '/images/ha.jpg', title: '100% Handmade', description: 'Authentic and unique handmade products.' },
              { image: '/images/s1.jpg', title: 'Eco-Friendly', description: 'We promote sustainability and green living.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-t-lg" />
                <h3 className="text-lg font-bold text-gray-800 mt-4">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
