import { useEffect, useState } from "react";
import { Food } from "../../models/food";
import api from "../../config/axios";
import { toast } from "react-toastify";
import Card from "../Cart";
import { Col, Row } from "antd";
import "./index.scss";

function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);
  useEffect(() => {
    const fetchFood = async () => {
      try {
        const res = await api.get("product");
        setFoods(res.data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };
    fetchFood();
  }, []);
  return (
    <div className="food-list">
      <Row gutter={24}>
        {foods.map((food) => (
          <Col span={6} xs={12} md={8} lg={6} style={{ paddingBottom: "30px" }}>
            <Card food={food} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FoodList;
