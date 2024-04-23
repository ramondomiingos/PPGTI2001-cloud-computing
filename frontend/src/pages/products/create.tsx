import { Create, useForm } from "@refinedev/antd";
import { Form, Input } from "antd";
import React from "react";

export const ProductCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
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
    </Create>
  );
};
