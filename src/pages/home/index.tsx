import "./index.scss";
import FoodList from "../../components/food-list";
import { Button } from "antd";
import { FcHome, FcInTransit } from "react-icons/fc";
import Carousel from "../../components/carousel";

function Home() {
  return (
    <div>
      <div className="section-delivery-address">
        <div className="section-delivery-address_dat-ngay">Đặt Ngay</div>
        <div className="section-delivery-address_delivery">
          <FcInTransit size={28} /> <span>Giao hàng</span>
        </div>
        <div className="section-delivery-address_take-away">
          <FcHome size={28} /> <span>hoặc Mang đi</span>
        </div>
        <Button className="section-delivery-address_start-button">
          Bắt đầu đặt hàng
        </Button>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
      <FoodList />
    </div>
  );
}

export default Home;
