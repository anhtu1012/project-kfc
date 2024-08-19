import ManageTemplate from "../../../components/ManageDashboard";
import { Category } from "../../../models/category";
import { Button, Form, Input, InputNumber, Popconfirm } from "antd";

function ManageProduct() {
  const title = "Product";
  const formItem = (
    <>
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: "Please input category name!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item name="price" label="Price">
        <InputNumber />
      </Form.Item>
    </>
  );
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      align: "center",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      align: "center",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      align: "center",
    },
  ];
  return (
    <div>
      <ManageTemplate
        columns={columns}
        title={title}
        formItems={formItem}
        apiURI="product"
      />
    </div>
  );
}

export default ManageProduct;
