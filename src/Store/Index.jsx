import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import myCategoriesReducer from "./CategoriesState";
import myProductsReducer from "./ProductsState";

let reducers = combineReducers({
  myCategoriesReducer: myCategoriesReducer,
  myProductsReducer:myProductsReducer
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
