import { Form, Image, Input, InputNumber, Select } from "antd";
import ManageTemplate from "../../../components/ManageDashboard";

function ManageFood() {
  const title = "Product";
  const formItem = (
    <>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input the product name!" }]}
      >
        <Input placeholder="Enter product name" />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[
          { required: true, message: "Please input the product description!" },
        ]}
      >
        <Input.TextArea placeholder="Enter product description" />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: "Please input the product price!" }]}
      >
        <InputNumber
          placeholder="Enter product price"
          min={0}
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        label="Category ID"
        name="categoryId"
        rules={[{ required: true, message: "Please input the category ID!" }]}
      >
        <Select
          options={[
            { value: 1, label: "Electronics" },
            { value: 2, label: "Books" },
            { value: 3, label: "Clothing" },
            { value: 4, label: "Home & Kitchen" },
          ]}
        />
      </Form.Item>

      <Form.Item
        label="Image URL"
        name="image"
        rules={[{ required: true, message: "Please input the image URL!" }]}
      >
        <Input placeholder="Enter image URL" />
      </Form.Item>
    </>
  );
  const columns = [
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
      title: "Category ID",
      dataIndex: "categoryId",
      key: "categoryId",
      align: "center",
    },
    {
      title: "Image URL",
      dataIndex: "image",
      key: "image",
      align: "center",
      render: (id, record) => <Image src={record.image} width={50} />,
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

export default ManageFood;
