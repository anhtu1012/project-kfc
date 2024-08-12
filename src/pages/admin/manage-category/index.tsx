import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import api from "../../../config/axios";
import { toast } from "react-toastify";
import { FormInstance, useForm } from "antd/es/form/Form";
import { Category } from "../../../models/category";

function ManageCaterogy() {
  const [dataSource, setDataSource] = useState<Category[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [form] = useForm<FormInstance>();

  const fetchCategory = async () => {
    try {
      const res = await api.get("category");
      setDataSource(res.data);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  const handleDeleteCategory = async (id: number) => {
    try {
      await api.delete(`category/${id}`);
      const listAfterDelete = dataSource.filter(
        (category) => category.id !== id
      );
      fetchCategory();
      setDataSource(listAfterDelete);
      toast.success("Successfully");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  const handleSubmit = async (values: Category) => {
    setLoading(true);
    try {
      if (values.id) {
        await api.put(`category/${values.id}`, values);
      } else {
        await api.post("category", values);
      }

      setLoading(false);
      toast.success("Successfully crate category");
      fetchCategory();
      setShowModal(false);
      form.resetFields();
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
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
      <div style={{ paddingBottom: "10px" }}>
        {" "}
        <Button
          onClick={() => {
            setShowModal(true);
            form.resetFields();
          }}
          style={{ background: "green", color: "white" }}
        >
          Create New Category
        </Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
      />
      ;
      <Modal
        onCancel={() => setShowModal(false)}
        open={showModal}
        footer={[
          <Button key="back" onClick={() => setShowModal(false)}>
            Cancel
          </Button>,
          <Button
            type="primary"
            style={{ background: "green", color: "white" }}
            onClick={() => form.submit()}
            loading={loading}
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} labelCol={{ span: 24 }} onFinish={handleSubmit}>
          <Form.Item name="id" hidden>
            <Input />
          </Form.Item>
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
        </Form>
      </Modal>
    </div>
  );
}

export default ManageCaterogy;
