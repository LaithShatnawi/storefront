export const selectedCategory = (category) => {
  return {
    type: "SELECT",
    payload: category,
  };
};
export const addProduct = (product) => {
  return {
    type: "ADD",
    payload: product,
  };
};
export const removeProduct = () => {
  return {
    type: "REMOVE",
  };
};
export const increaseProduct = (count) => {
  return {
    type: "INCREASE",
    payload:count
  };
};
