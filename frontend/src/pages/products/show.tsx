import { NumberField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography } from "antd";
import React from "react";

const { Title } = Typography;

export const ProductShow = () => {
  const { queryResult } = useShow({});
  const { data, isLoading } = queryResult;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Title level={5}>{"ID"}</Title>
      <NumberField value={record?._id ?? ""} />
      <Title level={5}>{"Name"}</Title>
      <TextField value={record?.name} />
        <Title level={5}>{"Description"}</Title>
        <TextField value={record?.description} />
        <Title level={5}>{"qtdAvailable"}</Title>
        <TextField value={record?.qtdAvailable} />
    </Show>
  );
};
