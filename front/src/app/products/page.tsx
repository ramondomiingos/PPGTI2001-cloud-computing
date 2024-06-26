"use client";

import {
  DeleteButton,
  EditButton,
  List,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { Space, Table } from "antd";

export default function CategoryList() {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
    <Table {...tableProps} rowKey="_id">
        <Table.Column dataIndex="_id" title={"_id"} />
        <Table.Column dataIndex="name" title={"name"} />
        <Table.Column dataIndex="description" title={"description"} />
        <Table.Column dataIndex="qtdAvailable" title={"qtdAvailable"} />
      
      <Table.Column
        title={"Actions"}
        dataIndex="actions"
        render={(_, record: BaseRecord) => (
          <Space>
            <EditButton hideText size="small" recordItemId={record._id} />
            <ShowButton hideText size="small" recordItemId={record._id} />
            <DeleteButton hideText size="small" recordItemId={record._id} />
          </Space>
        )}
      />
    </Table>
  </List>
  );
}
