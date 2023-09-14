/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Header.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { connect } from "react-redux";
import { useState } from "react";
import SimpleCart from "../SimpleCart/SimpleCart";

const Header = (props) => {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="headerContain">
      <h1>LAITH's STORE</h1>
      {props.myCart.order.length > 0 && (
        <div className="notification">{props.myCart.order.length}</div>
      )}
      <ShoppingCartIcon
        className="cart"
        onClick={() => setShowCart(!showCart)}
      />
      {props.myCart.order.length > 0 && showCart && (
        <>
          <div className="triangle"></div>
          <div className="list">
            <SimpleCart />
          </div>
        </>
      )}
      <Link to="/">
        <div className="home">Home</div>
      </Link>
    </div>
  );
};
const mapStateToProps = (state) => ({
  myCart: state.myCartReducer,
});

export default connect(mapStateToProps)(Header);
