import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { id: 1, name: "Bamboo Crafts", image: "/images/b1.jpg" }, 
  { id: 2, name: "Ceramics", image: "/images/c.jpg" }, 
  { id: 3, name: "Plants", image: "/images/pl.jpg" }, 
  { id: 4, name: "Jewelry", image: "/images/j3.jpg" },
  { id: 5, name: "Home Decor", image: "/images/w2.jpg" },
  { id: 6, name: "Paintings", image: "/images/p.jpg" },
  { id: 7, name: "Accessories", image: "/images/a.jpg" },
  { id: 8, name: "pepper Crafts", image: "/images/m.jpg" },
  { id: 9, name: "cloths", image: "/images/f.jpg" },
];

const Categories = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Shop by Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/products/${category.name.toLowerCase()}`}
            className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            <img 
              src={category.image} 
              alt={category.name} 
              className="w-full h-60 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
