import {
  Button,
  Collapse,
  CollapseProps,
  Image,
  Input,
  theme,
  Typography,
} from "antd";
import { CSSProperties } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { LuMinusCircle } from "react-icons/lu";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, remove, selectCart } from "../../redux/features/cartSlice";
import { Food } from "../../models/food";

function CheckOut() {
  const { token } = theme.useToken();
  const carts: Food[] = useSelector(selectCart);
  const dispatch = useDispatch();
  // Hàm tính tổng giá của một món hàng
  const calculateItemTotalPrice = (price: number, quantity: number): number => {
    return price * quantity;
  };
  // Hàm tính tổng giá của tất cả các món hàng trong giỏ
  const calculateTotalPrice = (): number => {
    return carts.reduce((total, cart) => total + cart.price * cart.quantity, 0);
  };

  const totalPrice = calculateTotalPrice();
  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: "#fff",
    borderRadius: token.borderRadiusLG,
    border: "none",
    padding: 0,
    width: "250px",
  };

  const getItems = (
    cart: Food,
    panelStyle: CSSProperties
  ): CollapseProps["items"] => [
    {
      key: "1",
      label: "Xem thêm",
      children: <p>{cart.description}</p>,
      style: panelStyle,
    },
  ];
  const handleDelete = (food: Food) => {
    dispatch(remove(food));
  };
  const handleIncreaseQuantity = (food: Food) => {
    dispatch(changeQuantity({ ...food, quantity: food.quantity + 1 }));
  };

  const handleDecreaseQuantity = (food: Food) => {
    if (food.quantity > 1) {
      dispatch(changeQuantity({ ...food, quantity: food.quantity - 1 }));
    } else {
      handleDelete(food);
    }
  };
  return (
    <div className="check-out">
      <div className="check-out__item">
        <h2>Order</h2>

        {carts.map((cart) => (
          <>
            <div key={cart.id} className="item_left">
              <div className="item_left__detele">
                <AiOutlineClose size={25} onClick={() => handleDelete(cart)} />
              </div>
              <div className="item_tilte">
                <div className="item_img">
                  <Image width={200} src={cart.image} />
                </div>
                <div className="item_description">
                  <div className="item_description__tilte">{cart.name}</div>
                  <Collapse
                    bordered={false}
                    items={getItems(cart, panelStyle)}
                  />
                </div>
              </div>
              <div className="item_quantity">
                <div className="item_1">
                  <span onClick={() => handleDecreaseQuantity(cart)}>
                    <LuMinusCircle size={30} />
                  </span>
                  <span>{cart.quantity}</span>
                  <span onClick={() => handleIncreaseQuantity(cart)}>
                    <HiOutlinePlusCircle size={30} />
                  </span>
                </div>
                <div className="item_price">
                  {" "}
                  {calculateItemTotalPrice(
                    cart.price,
                    cart.quantity
                  ).toLocaleString()}{" "}
                  đ
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className="check-out__detail">
        <h2>Payment Summary</h2>
        <div className="detail_right">
          <div className="detail_right__tilte">{carts.length} Món</div>
          <hr />
          <div className="detail_right__sale">Bạn có Mã giảm giá ?</div>
          <Typography.Title
            level={5}
            style={{ color: "gray", fontSize: "15px", fontWeight: "400" }}
          >
            Mã Giảm giá
          </Typography.Title>
          <div className="detail_right__code-sale">
            <div style={{ width: "70%" }}>
              <Input />
            </div>
            <div>
              <Button className="button"> Áp dụng</Button>
            </div>
          </div>
          <hr />
          <div className="detail_right__sum">
            <span>Tổng đơn hàng</span>
            <span>{totalPrice.toLocaleString()}₫</span>
          </div>
          <div className="detail_right__sumMain">
            <span>Tổng đơn hàng</span>
            <span>{totalPrice.toLocaleString()}₫</span>
          </div>
          <hr />
          <div className="detail_right__checkout">
            <Button className="button"> Thanh toán</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOut;
