import { Button, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";
import api from "../../../config/axios";
import { toast } from "react-toastify";

function ManageCaterogy() {
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    const fetCaterogy = async () => {
      try {
        const res = await api.get("category");
        setDataSource(res.data);
      } catch (error) {
        toast.error(error.response.data);
      }
    };
    fetCaterogy();
  }, []);
  const handleDeleteCategory = async (id) => {
    await api.delete(`category/${id}`);
    const listAfterDelete = dataSource.filter((category) => category.id !== id);
    setDataSource(listAfterDelete);
    toast.success("Click on Yes");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      // eslint-disable-next-line no-unused-vars
      render: (id, record) => (
        <div style={{ textAlign: "center" }}>
          <Button
            // onClick={() => handleEditModal(record)}
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
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
}

export default ManageCaterogy;
