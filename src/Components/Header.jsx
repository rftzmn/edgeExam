import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost text-xl" to="/home">
          HOME
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <a href="">
              <FaShoppingCart></FaShoppingCart>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
