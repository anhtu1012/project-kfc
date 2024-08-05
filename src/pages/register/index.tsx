import { Button, Form, Input } from "antd";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
function Register() {
  const navigate = useNavigate();
  const handleRegister = async (values) => {
    try {
      await api.post("register", values);
      toast.success("ok đấy");
      navigate("/");
    } catch (error) {
      toast.error(error.response.data);
    }
  };
  return (
    <div style={{ padding: "0px 50px" }}>
      <AuthenLayout>
        <h1 style={{ paddingTop: "20px" }} className="title">
          Register
        </h1>
        <Form
          name="userForm"
          onFinish={handleRegister}
          initialValues={{
            role: "ADMIN",
          }}
          className="form-register"
          labelCol={{ span: 24 }}
        >
          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your password!",
              },
              {
                pattern: /^\d{10}$/,
                message: "Phone number must be 10 digits!",
              },
            ]}
          >
            <Input className="form-register_input" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password className="form-register_input" />
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input className="form-register_input" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email!",
                type: "email",
              },
            ]}
          >
            <Input className="form-register_input" />
          </Form.Item>
          <Form.Item>
            <Button
              className="form-register_button"
              type="primary"
              htmlType="submit"
            >
              Create Account
            </Button>
          </Form.Item>
        </Form>
        <div style={{ textAlign: "center" }}>
          <span>
            Do you already have an account?{" "}
            <Link
              to="/login"
              style={{
                fontWeight: "bold",
                color: "black",
                textDecoration: "underline",
              }}
            >
              Login
            </Link>
          </span>
        </div>
      </AuthenLayout>
    </div>
  );
}

export default Register;
