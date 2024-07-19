import { Button, Form, Input } from "antd";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = async (values: any) => {
    try {
      const res = await api.post("login", values);
      toast.success("Successfully logged in");
      dispatch(login(res.data)); // lưu data vào login
      navigate("/");
    } catch (err: any) {
      toast.error(err.response.data);
    }
  };
  return (
    <div style={{ padding: "0px 50px" }}>
      <AuthenLayout>
        <Form onFinish={handleLogin} labelCol={{ span: 24 }}>
          <Form.Item
            name="phone"
            label="phone"
            rules={[
              {
                required: true,
                message: "Nhập đi",
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="password"
            rules={[
              {
                required: true,
                message: "Nhập đi",
              },
            ]}
          >
            <Input.Password placeholder="Enter your pass" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </AuthenLayout>
    </div>
  );
}

export default Login;
