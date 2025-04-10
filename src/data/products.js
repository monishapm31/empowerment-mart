export let products = [
  //Bomboo crafts
  { id: 1, name: "Bamboo Materails", price: 250, category: "Bamboo crafts", image: "/images/b.jpg", approved: true ,description: "Celebrate culture. Empower communities. Shop with heart."},
  { id: 2, name: " Basket", price: 105, category: "Bamboo crafts", image: "/images/b2.jpg", approved: true, description: "Every purchase is a voice for equality." },
  { id: 3, name: "Bamboo baskets", price: 150, category: "Bamboo crafts", image: "/images/b3.png", approved: true,description: "Buy with purpose, empower with pride." },
  { id: 4, name: "Bamboo crafts", price: 50, category: "Bamboo crafts", image: "/images/b4.jpg", approved: true , description:"Support dreams stitched into every thread."},
  { id: 5, name: "Bowl", price: 230, category: "Bamboo crafts", image: "/images/b5.jpg", approved: true, description: "You’re not just buying a product — you’re uplifting a life."},
  //ceramics
  { id: 6, name: "Cups", price: 250, category: "ceramics", image: "/images/c.jpg", approved: true ,description: "Real change begins when you choose to care."},
  { id: 7, name: " Vase", price: 105, category: "ceramics", image: "/images/c1.jpg", approved: true, description:"Celebrate culture. Empower communities. Shop with heart." },
  { id: 8, name: "Cups", price: 150, category: "ceramics", image: "/images/c3.jpg", approved: true,description: "When you choose handmade, you choose humanity." },
  { id: 9, name: "Painted Pots", price: 50, category: "ceramics", image: "/images/c4.jpg", approved: true , description:"Together, we weave a more inclusive tomorrow."},
  { id: 10, name: "Painted vase", price: 230, category: "ceramics", image: "/images/c5.jpg", approved: true, description: "Your kindness is their opportunity."},

  //plants
  { id: 11, name: "Show plants", price: 250, category: "plants", image: "/images/pl1.jpg", approved: true ,description: "Every thread, every bead — stitched with stories of survival." },
  { id: 12, name: " Interior design plants", price: 105, category: "plants", image: "/images/pl2.jpg", approved: true, description:"You’re not just shopping. You’re standing beside someone who was once invisible."  },
  { id: 13, name: "Show plants", price: 150, category: "plants", image: "/images/pl3.jpg", approved: true,description:"The world changes when someone like you chooses to care."},
  { id: 14, name: "plants", price: 50, category: "plants", image: "/images/pl4.jpg", approved: true , description:"The world changes when someone like you chooses to care."},
  { id: 15, name: "plants", price: 230, category: "plants", image: "/images/pl5.jpg", approved: true, description:"Let your purchase echo with purpose — let it speak for the unheard." },
  // Jewelry Category
  { id: 16, name: "Handmade Necklace", price: 250, category: "jewelry", image: "/images/j6.jpg", approved: true , description:"Your cart isn’t just full of products. It’s full of possibilities." },
  { id: 17, name: " Bracelet", price: 105, category: "jewelry", image: "/images/j2.jpg", approved: true,description:"Hope is handmade — and you're holding it." },
  { id: 18, name: "Beaded Earings", price: 150, category: "jewelry", image: "/images/j1.jpg", approved: true ,description:"Support the hands that were once tied by circumstance."},
  { id: 19, name: "Hand Tie", price: 50, category: "jewelry", image: "/images/j5.jpg", approved: true ,description:"When you shop here, you light a spark where there was darkness."},
  { id: 20, name: "Earings", price: 230, category: "jewelry", image: "/images/j4.jpg", approved: true ,description:"You’re not helping the less fortunate. You’re recognizing the equally capable."},

  // Home Decor Category
  { id: 21, name: "Wooden works", price: 140, category: "home decor", image: "/images/w1.jpg", approved: true, description: "Celebrate culture. Empower communities. Shop with heart." },
  { id: 22, name: "Glass Vase", price: 230, category: "home decor", image: "/images/h2.jpg", approved: true, description:"Celebrate culture. Empower communities. Shop with heart." },
  { id: 23, name: "Wall Decore", price: 530, category: "home decor", image: "/images/h3.jpg", approved: true ,description:"Support dreams stitched into every thread."},
  { id: 24, name: "Wall Hangings", price: 330, category: "home decor", image: "/images/h4.jpg", approved: true ,description: "You’re not just buying a product — you’re uplifting a life."},
  { id: 25, name: "Home Decore", price: 730, category: "home decor", image: "/images/h5.jpg", approved: true, description: "Every thread, every bead — stitched with stories of survival." },
  { id: 26, name: "Home decore", price: 430, category: "home decor", image: "/images/h6.jpg", approved: true ,description:"The world changes when someone like you chooses to care."},

  // Paintings Category
  { id: 27, name: "House Painting", price: 850, category: "paintings", image: "/images/p1.jpg", approved: true ,description:"Support the hands that were once tied by circumstance."},
  { id: 28, name: "Nature Art", price: 560, category: "paintings", image: "/images/p2.jpg", approved: true,description:"The world changes when someone like you chooses to care." },
  { id: 29, name: "Falls Art", price: 960, category: "paintings", image: "/images/p3.jpg", approved: true,description:"The world changes when someone like you chooses to care." },
  { id: 30, name: "House Art", price: 360, category: "paintings", image: "/images/p4.jpg", approved: true ,description: "Every thread, every bead — stitched with stories of survival."},
  { id: 31, name: "Hut House Art", price: 1260, category: "paintings", image: "/images/p5.jpg", approved: true ,description:"The world changes when someone like you chooses to care."},
  { id: 32, name: "Landscape Art", price: 450, category: "paintings", image: "/images/p6.jpg", approved: true,description: "Every thread, every bead — stitched with stories of survival." },

  // Accessories Category
  { id: 33, name: "Toys", price: 120, category: "accessories", image: "/images/a1.jpg", approved: true ,description:"Celebrate culture. Empower communities. Shop with heart."},
  { id: 34, name: "Plastic vase", price: 335, category: "accessories", image: "/images/a2.jpg", approved: true ,description:"The world changes when someone like you chooses to care."},
  { id: 35, name: "Hangings", price: 50, category: "accessories", image: "/images/a3.jpg", approved: true ,description: "Every thread, every bead — stitched with stories of survival."},
  { id: 36, name: "Bird toy", price: 355, category: "accessories", image: "/images/a4.jpg", approved: true,description:"Support the hands that were once tied by circumstance." },
  { id: 37, name: "Decore items", price: 305, category: "accessories", image: "/images/a5.jpg", approved: true,description:"Support the hands that were once tied by circumstance." },

  //pepper crafts
  { id: 38, name: "Flower crafts", price: 50, category: "pepper crafts", image: "/images/m1.jpg", approved: true,description:"The world changes when someone like you chooses to care." },
  { id: 39, name: "pepper Flower crafts", price: 80, category: "pepper crafts", image: "/images/m2.jpg", approved: true,description: "Every thread, every bead — stitched with stories of survival." },
  { id: 40, name: "Floers crafts", price: 60, category: "pepper crafts", image: "/images/m3.jpg", approved: true ,description:"The world changes when someone like you chooses to care."},
  { id: 41, name: "Flowers and Vase crafts", price: 100, category: "pepper crafts", image: "/images/m4.jpg", approved: true,description:"Support the hands that were once tied by circumstance." },
  { id: 42, name: "Rose crafts", price: 70, category: "pepper crafts", image: "/images/m5.jpg", approved: true, description: "Empowerment isn’t charity — it’s justice wrapped in hope."},
  { id: 43, name: "Flower crafts", price: 40, category: "pepper crafts", image: "/images/m6.jpg", approved: true,description: "Every thread, every bead — stitched with stories of survival." },

  //cloths 
  { id: 44, name: "Towel", price: 230, category: "cloths", image: "/images/f1.jpg", approved: true,description:"Support the hands that were once tied by circumstance."}, 
  { id: 45, name: "scraf", price: 730, category: "cloths", image: "/images/f2.jpg", approved: true, description:"You’re not just shopping. You’re standing beside someone who was once invisible."},
  { id: 46, name: "scraf", price: 480, category: "cloths", image: "/images/f3.jpg", approved: true, description:"Their hands create. Your heart supports."},
  { id: 47, name: "Wollen-scraf", price: 930, category: "cloths", image: "/images/f4.jpg", approved: true, description:"The world changes when someone like you chooses to care." },
  { id: 48, name: "Blue-scraf", price: 530, category: "cloths", image: "/images/f5.jpg", approved: true, descriptin:"Support the hands that were once tied by circumstance." },
];


// Function to fetch products from localStorage
export const getProducts = () => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  return [...products, ...storedProducts];
};

// Function to add a new product
export const addProduct = (newProduct) => {
  const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
  storedProducts.push(newProduct);
  localStorage.setItem("products", JSON.stringify(storedProducts));
};

// Function to fetch orders from localStorage
export const getOrders = () => {
  return JSON.parse(localStorage.getItem("orders")) || [];
};

// Function to add a new order
export const addOrder = (order) => {
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  storedOrders.push({ ...order, status: "Pending" }); // Default status is "Pending"
  localStorage.setItem("orders", JSON.stringify(storedOrders));
};

// Function to update an order status
export const updateOrderStatus = (orderId, newStatus) => {
  const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const updatedOrders = storedOrders.map(order => 
    order.id === orderId ? { ...order, status: newStatus } : order
  );
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
};
