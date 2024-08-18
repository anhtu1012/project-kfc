import moment from "moment";
import ManageTemplate, { Column } from "../../../components/ManageDashboard";
import { Category } from "../../../models/category";
import { Button, DatePicker, Form, Input, InputNumber, Popconfirm } from "antd";
import { formatDistanceToNow } from "date-fns";

function ManageVoucher() {
  const title = "Voucher";
  const formItem = (
    <>
      <Form.Item
        name="code"
        label="Code"
        rules={[{ required: true, message: "Please input the code!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="startAt"
        label="Start At"
        rules={[{ required: true, message: "Please select the start date!" }]}
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item
        name="endAt"
        label="End At"
        rules={[{ required: true, message: "Please select the end date!" }]}
      >
        <DatePicker showTime />
      </Form.Item>

      <Form.Item
        name="value"
        label="Value"
        rules={[{ required: true, message: "Please input the value!" }]}
      >
        <InputNumber />
      </Form.Item>
    </>
  );
  const columns: Column[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      align: "center",
    },
    {
      title: "StartAt",
      dataIndex: "startAt",
      key: "startAt",
      align: "center",
      render: (startAt) => <p>{moment(startAt).format("YYYY-MM-DD HH:mm")}</p>,
    },
    {
      title: "EndAt",
      dataIndex: "endAt",
      key: "endAt",
      align: "center",
      render: (endAt) => <p>{moment(endAt).format("YYYY-MM-DD HH:mm")}</p>,
    },
    {
      title: "CreateAt",
      dataIndex: "createAt",
      key: "createAt",
      align: "center",
      render: (createAt) => {
        return formatDistanceToNow(new Date(createAt), { addSuffix: true });
      },
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      align: "value",
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
        apiURI="voucher"
      />
    </div>
  );
}

export default ManageVoucher;
