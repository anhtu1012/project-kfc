import { Food } from "../../models/food";
import "./index.scss";
interface CardProps {
  food: Food;
}
function Card({ food }: CardProps) {
  const { name, description, image, price, id } = food; // ứng dụng destructuring
  return (
    <div className="food-card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="food-card_content">
        <div style={{ height: "130px" }}>
          <div className="food-card_info">
            <span> {name}</span>
            <span>
              {" "}
              {price}
              <strong>đ</strong>
            </span>
          </div>
          <p className="description">
            {description.substring(0, 100)}
            {description.length > 100 && "..."}
          </p>
        </div>
        <button>Thêm</button>
      </div>
    </div>
  );
}

export default Card;
