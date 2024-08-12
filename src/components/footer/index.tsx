import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import "./index.scss";
function Footer() {
  return (
    <div className="final-footer">
      {" "}
      <div className="footer">
        <div className="footer_item">
          <p className="footer_item_title">Danh Mục Món Ăn</p>
          <p className="footer_item_text">Ưu Đãi</p>
          <p className="footer_item_text">Món Mới</p>
          <p className="footer_item_text">Combo 1 Người</p>
          <p className="footer_item_text">Combo Nhóm</p>
          <p className="footer_item_text">Gà Rán - Gà Quay</p>
          <p className="footer_item_text">Burger - Cơm - Mì Ý</p>
          <p className="footer_item_text">Thức Ăn Nhẹ</p>
          <p className="footer_item_text">Thức Uống & Tráng Miệng</p>
        </div>
        <div className="footer_item">
          <p className="footer_item_title">Về KFC</p>
          <p className="footer_item_text">Câu Chuyện Của Chúng Tôi</p>
          <p className="footer_item_text">Tin Khuyến Mãi</p>
          <p className="footer_item_text">Tin tức KFC</p>
          <p className="footer_item_text">Tuyển dụng</p>
          <p className="footer_item_text">Đặt tiệc Sinh nhật</p>
        </div>
        <div className="footer_item">
          <p className="footer_item_title">Liên hệ KFC</p>
          <p className="footer_item_text">Theo dõi đơn hàng</p>
          <p className="footer_item_text">Hệ Thống Nhà Hàng</p>
          <p className="footer_item_text">Liên hệ KFC</p>
        </div>
        <div className="footer_item">
          <p className="footer_item_title">Chính sách</p>
          <p className="footer_item_text">Chính sách hoạt động</p>
          <p className="footer_item_text">Chính sách và quy định</p>
          <p className="footer_item_text">Chính sách bảo mật thông tin</p>
        </div>
        <div className="footer_item">
          <p className="footer_item_title">Download App</p>
          <div className="footer_item_download">
            <img
              width={136}
              style={{ padding: "10px 10px 0 0" }}
              src="https://static.kfcvietnam.com.vn/images/web/logo_appstore.png"
            />
            <img
              width={136}
              src="	https://static.kfcvietnam.com.vn/images/web/logo_playstore.png"
            />
          </div>
        </div>
      </div>
      <div className="social">
        <div></div>
        <p className="coppyright">
          Copyright © {new Date().getFullYear()} KFC Vietnam
        </p>
        <div className="social_link">
          <p className="social_link_fb">
            <CiFacebook />
          </p>
          <p className="social_link_inta">
            <CiInstagram />
          </p>
          <p className="social_link_youtute">
            <CiYoutube />
          </p>
          <p className="social_link_twitter">
            <CiTwitter />
          </p>
        </div>
      </div>
      <div style={{ padding: "20px 60px" }}>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
