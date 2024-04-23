"use client";

import { Edit, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";

export default function CategoryEdit() {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
      <Form.Item
              label={"id"}
              name={["_id"]}
              rules={[
                  {
                      required: false,
                  },
              ]}
          >
              <Input disabled />
          </Form.Item>
      <Form.Item
              label={"name"}
              name={["name"]}
              rules={[
                  {
                      required: true,
                  },
              ]}
          >
              <Input />
          </Form.Item>
          <Form.Item
              label={"description"}
              name={["description"]}
              rules={[
                  {
                      required: true,
                  },
              ]}
          >
              <Input />
          </Form.Item>
          <Form.Item
              label={"qtdAvailable"}
              name={["qtdAvailable"]}
              rules={[
                  {
                      required: true,
                  },
              ]}
          >
              <Input type='number'/>
          </Form.Item>
      </Form>
    </Edit>
  );
}
