import { Button, Form, Input } from "antd";
import AuthenLayout from "../../components/authen-layout";
import api from "../../config/axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    <div>
      <AuthenLayout>
        <Form
          name="userForm"
          onFinish={handleRegister}
          initialValues={{
            role: "ADMIN",
          }}
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 16 }}
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
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input />
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
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </AuthenLayout>
    </div>
  );
}

export default Register;
