import { useNavigate } from "react-router-dom";
import "./index.scss";
import { FaRegUserCircle } from "react-icons/fa";
function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://static.kfcvietnam.com.vn/images/web/kfc-logo.svg?v=5.0"
          alt="logo"
          width={55}
          className="header__logo"
        />
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
          <span className="number">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
