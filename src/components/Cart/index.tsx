import { useDispatch } from "react-redux";
import { Food } from "../../models/food";
import "./index.scss";
import { addToCart } from "../../redux/features/cartSlice";
interface CardProps {
  food: Food;
}
function Card({ food }: CardProps) {
  const { name, description, image, price, id } = food; // ứng dụng destructuring
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(food));
  };
  return (
    <div className="food-card">
      <div className="image">
        <img src={image} />
      </div>
      <div className="food-card_content">
        <div>
          <div className="food-card_info">
            <span> {name}</span>
            <div className="price">
              <span>
                {price}
                <strong>đ</strong>
              </span>
              <span className="price_original">
                122000 <strong>đ</strong>
              </span>
            </div>
          </div>
          <p className="description">
            {description.substring(0, 100)}
            {description.length > 100 && "..."}
          </p>
        </div>
      </div>
      <div>
        <button className="food-card_button" onClick={handleAddToCart}>
          Thêm
        </button>
      </div>
    </div>
  );
}

export default Card;
