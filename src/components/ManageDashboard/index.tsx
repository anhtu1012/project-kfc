/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import { Category } from "../../models/category";
import api from "../../config/axios";

export interface Column {
  title: string;
  dataIndex: string;
  key: string;
  align: string;
  render?: (value: any) => any;
}
interface ManageTemplateProps {
  title: string;
  columns: Column[];
  formItems: React.ReactElement;
  apiURI: string;
}
function ManageTemplate({
  columns,
  title,
  formItems,
  apiURI,
}: ManageTemplateProps) {
  const [dataSource, setDataSource] = useState<Category[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [fetching, setFetching] = useState<boolean>(true);
  const [form] = useForm();

  const fetchItem = async () => {
    try {
      const res = await api.get(apiURI);
      setDataSource(res.data);
      setFetching(false);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  useEffect(() => {
    fetchItem();
  }, []);
  const handleDeleteCategory = async (id: number) => {
    try {
      await api.delete(`${apiURI}/${id}`);
      const listAfterDelete = dataSource.filter(
        (category) => category.id !== id
      );
      fetchItem();
      setDataSource(listAfterDelete);
      toast.success("Successfully");
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      if (values.id) {
        await api.put(`${apiURI}/${values.id}`, values);
      } else {
        await api.post(apiURI, values);
      }

      setLoading(false);
      toast.success(`Successfully crate ${title} `);
      fetchItem();
      setShowModal(false);
      form.resetFields();
    } catch (error: any) {
      toast.error(error.response.data);
    }
  };

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
          Create New {title}
        </Button>
      </div>
      <Table
        loading={fetching}
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
          {formItems}
        </Form>
      </Modal>
    </div>
  );
}

export default ManageTemplate;
