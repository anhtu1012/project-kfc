import { Button, Form, Input } from "antd";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/features/userSlice";
import "./index.scss";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
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
        <h1 className="title">Login</h1>
        <Form
          onFinish={handleLogin}
          className="form-login"
          labelCol={{ span: 24 }}
        >
          <Form.Item
            name="phone"
            label="Phone"
            rules={[
              {
                required: true,
                message: "Nhập đi",
              },
            ]}
          >
            <Input
              className="form-login_input"
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Nhập đi",
              },
            ]}
          >
            <Input.Password
              className="form-login_input"
              placeholder="Enter your pass"
            />
          </Form.Item>
          <Button
            className="form-login_button"
            type="primary"
            htmlType="submit"
          >
            Login
          </Button>
          <h5
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              padding: "10px 0px",
            }}
          >
            Or continue with
          </h5>
          <Button
            className="form-login_buttonGG"
            type="primary"
            htmlType="submit"
          >
            <FcGoogle size={20} /> Login with Google
          </Button>
          <Button
            className="form-login_buttonFB"
            type="primary"
            htmlType="submit"
          >
            <FaFacebook size={20} /> Login with facebook
          </Button>
        </Form>
        <div style={{ textAlign: "center", paddingTop: "30px" }}>
          <span>
            Do not have an account?{" "}
            <Link
              to="/register"
              style={{
                fontWeight: "bold",
                color: "black",
                textDecoration: "underline",
              }}
            >
              Register
            </Link>
          </span>
        </div>
      </AuthenLayout>
    </div>
  );
}

export default Login;
