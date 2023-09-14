import "./App.scss";
import Categories from "./Components/Categories/Categories";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Products from "./Components/Products/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />}></Route>
        <Route path="/products" element={<Products />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
