/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
const initialState = {
  products: [
    {
      name: "Smartphone",
      price: 799.99,
      description: "High-end smartphone with advanced features.",
      category: "electronics",
      image: "",
      count: 0,
    },
    {
      name: "Laptop",
      price: 1299.99,
      description: "Powerful laptop for work and entertainment.",
      category: "electronics",
      image: "",
      count: 0,
    },
    {
      name: "Headphones",
      price: 149.99,
      description: "Noise-cancelling headphones for immersive audio.",
      category: "electronics",
      image: "",
      count: 0,
    },
    {
      name: "Smart TV",
      price: 899.99,
      description: "4K smart TV with streaming capabilities.",
      category: "electronics",
      image: "",
      count: 0,
    },
    {
      name: "Fitness Tracker",
      price: 79.99,
      description: "Tracks your fitness activities and health metrics.",
      category: "electronics",
      image: "",
      count: 0,
    },
    {
      name: "Bluetooth Speaker",
      price: 129.99,
      description: "Portable speaker with excellent sound quality.",
      category: "electronics",
      image: "",
    },
    {
      name: "Vacuum Cleaner",
      price: 149.99,
      description: "Powerful vacuum cleaner for efficient cleaning.",
      category: "household",
      image: "",
      count: 0,
    },
    {
      name: "Blender",
      price: 79.99,
      description: "Versatile blender for smoothies and food prep.",
      category: "household",
      image: "",
      count: 0,
    },
    {
      name: "Toaster",
      price: 39.99,
      description: "Quick and efficient toaster for your morning routine.",
      category: "household",
      image: "",
      count: 0,
    },
    {
      name: "Coffee Maker",
      price: 69.99,
      description: "Automatic coffee maker for fresh brews.",
      category: "household",
      image: "",
      count: 0,
    },
    {
      name: "Iron",
      price: 49.99,
      description: "Steam iron for wrinkle-free clothes.",
      category: "household",
      image: "",
      count: 0,
    },
    {
      name: "Dishwasher",
      price: 449.99,
      description: "Efficient dishwasher for sparkling clean dishes.",
      category: "household",
      image: "",
    },
    {
      name: "Apples",
      price: 2.99,
      description: "Fresh, crisp apples for snacking and cooking.",
      category: "groceries",
      image: "",
      count: 0,
    },
    {
      name: "Milk",
      price: 1.99,
      description: "Nutrient-rich milk for your daily needs.",
      category: "groceries",
      image: "",
      count: 0,
    },
    {
      name: "Bread",
      price: 2.49,
      description: "Soft and delicious bread for sandwiches.",
      category: "groceries",
      image: "",
      count: 0,
    },
    {
      name: "Eggs",
      price: 3.99,
      description: "Farm-fresh eggs for your breakfast.",
      category: "groceries",
      image: "",
      count: 0,
    },
    {
      name: "Cereal",
      price: 4.99,
      description: "Nutritious cereal for a balanced start to your day.",
      category: "groceries",
      image: "",
      count: 0,
    },
    {
      name: "Pasta",
      price: 1.79,
      description: "Versatile pasta for delicious meals.",
      category: "groceries",
      image: "",
    },
  ],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state)
  switch (type) {
    case "SELECT":
      const selectedProducts = state.products.filter(
        (item) => payload === item.category
      );

      return { products: selectedProducts };
    default:
      return state;
  }
};

