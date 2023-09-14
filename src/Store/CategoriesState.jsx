import electronics from "../assets/electronics.avif";
import household from "../assets/household.avif";
import groceries from "../assets/groceries.avif";

const initialState = {
  category: [
    {
      name: "electronics",
      displayName: "ELECTRONICS",
      description:
        " Explore a world of cutting-edge gadgets, from sleek smartphones to powerful laptops, and everything in between. Discover top-notch audio equipment, smart home solutions, and a plethora of accessories to enhance your tech experience.",
      image: electronics,
    },
    {
      name: "household",
      displayName: "HOUSEHOLD",
      description:
        "Find a curated selection of quality furnishings, decor, and practical solutions for every room. From cozy bedding to functional kitchenware, we've got your household needs covered.",
      image: household,
    },
    {
      name: "groceries",
      displayName: "GROCERIES",
      description:
        "Experience a wide array of handpicked, farm-fresh produce, pantry staples, and gourmet delights. Our aisles are stocked with the finest ingredients for your culinary adventures. From organic greens to artisanal cheeses, we've sourced the best for you.",
      image: groceries,
    },
  ],
  active: "",
};
// eslint-disable-next-line react-refresh/only-export-components
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SELECT":
      return {
        category: state.category,
        active: `${payload}`,
      };
    default:
      return state;
  }
};

