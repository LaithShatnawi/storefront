/* eslint-disable no-case-declarations */
/* eslint-disable react-refresh/only-export-components */
const initialState = {
  order: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  console.log(state);
  switch (type) {
    case "ADD":
      const newItem = {
        name: payload.name,
        price: payload.price,
        description: payload.description,
        category: payload.category,
        image: payload.image,
        count: payload.count,
      };
      return { order: [...state.order, newItem] };
    default:
      return state;
  }
};
