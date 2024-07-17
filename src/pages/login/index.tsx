import { Button, Form, Input } from "antd";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = async (values) => {
    try {
      await api.post("login", values);
      toast.success("ok rồi đấy");
      navigate("/login");
    } catch (err) {
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
