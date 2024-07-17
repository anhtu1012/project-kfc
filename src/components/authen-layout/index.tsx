import { Col, Image, Row } from "antd";

type AuthenLayoutProps = {
  //define props
  children: React.ReactNode;
};
function AuthenLayout({ children }: AuthenLayoutProps) {
  return (
    <Row align={"middle"} gutter={30}>
      <Col span={12}>
        <Image src="https://static.kfcvietnam.com.vn/images/web/signin/lg/signin.jpg?v=LW5XYg" />
      </Col>
      <Col span={12}>{children}</Col>
    </Row>
  );
}

export default AuthenLayout;
