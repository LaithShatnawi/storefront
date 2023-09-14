/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerContain">
      <h1>LAITH's STORE</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
