/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input, Modal, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "antd/es/form/Form";
import { Category } from "../../models/category";
import api from "../../config/axios";
import Column from "antd/es/table/Column";
import dayjs from "dayjs";

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
  const [tableColumns, settableColumns] = useState<Column[]>([]);
  useEffect(() => {
    //useEffect này sẽ chạy khi giá trị columns thay đổi
    const newColumns = [
      ...columns,
      {
        title: "Action",
        dataIndex: "id",
        key: "id",
        align: "center",
        // eslint-disable-next-line no-unused-vars
        render: (id, record) => (
          <div style={{ textAlign: "center" }}>
            <Button
              onClick={() => {
                setShowModal(true);
                const newRecord = { ...record };
                console.log(newRecord);
                //vòng lập
                // check tất cả các thuộc tính xem thằng nào là datetime

                for (var key of Object.keys(newRecord)) {
                  //record[key]
                  // record['id'] <=> record.id

                  const value = newRecord[key];

                  var date: any = new Date(value);
                  const time: any = date.getTime();
                  if (typeof value === "number" || isNaN(time)) {
                    // => thằng này k phải date time
                  } else {
                    // thằng này là date time => cần cập nhật lại đúng định dạng antd
                    newRecord[key] = dayjs(value);
                  }
                }

                form.setFieldsValue(newRecord);
              }}
              style={{ marginRight: 8 }}
            >
              Update
            </Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this task?"
              onConfirm={() => handleDelete(id)}
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
    settableColumns(newColumns);
  }, [columns]);

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
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`${apiURI}/${id}`);
      // const listAfterDelete = dataSource.filter(
      //   (category) => category.id !== id
      // );
      fetchItem();
      // setDataSource(listAfterDelete);
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
        columns={tableColumns}
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
