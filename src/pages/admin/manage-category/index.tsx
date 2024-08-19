import ManageTemplate from "../../../components/ManageDashboard";
import { Category } from "../../../models/category";
import { Button, Form, Input, Popconfirm } from "antd";

function ManageCategory() {
  const title = "Category";
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
  ];
  return (
    <div>
      <ManageTemplate
        columns={columns}
        title={title}
        formItems={formItem}
        apiURI="category"
      />
    </div>
  );
}

export default ManageCategory;
