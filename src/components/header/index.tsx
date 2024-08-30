import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/features/cartSlice";
function Header() {
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/">
          <img
            src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0"
            alt="logo"
            width={55}
            className="header__logo"
          />
        </Link>
        <ul className="header__navigation">
          <li>Thực Đơn</li>
          <li>Khuyết Mãi</li>
          <li>Dịch vụ</li>
          <li>Nhà hàng</li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__account">
          <FaRegUserCircle
            onClick={() => navigate("/login")}
            className="icon"
          />
        </div>
        <div className="header__cart">
          <Link
            to="/check-out"
            style={{ color: "black", textDecoration: "none" }}
          >
            <span className="number">{cart.length}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
