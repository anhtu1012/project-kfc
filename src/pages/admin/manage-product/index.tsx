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
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      align: "center",
      // eslint-disable-next-line no-unused-vars
      render: (id: number, record: Category) => (
        <div style={{ textAlign: "center" }}>
          <Button
            onClick={() => {
              setShowModal(true);
              form.setFieldsValue(record);
            }}
            style={{ marginRight: 8 }}
          >
            Update
          </Button>
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => handleDeleteCategory(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
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
