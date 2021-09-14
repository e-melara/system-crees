import React from "react";
import { Col, Select, Form } from "antd";

interface SelectTypeInterface {
  column: { span: number };
  item: {
    name: string;
    label: string;
    extra?: string;
    rules?: Array<Object>;
    placeholder?: string;
  };
  optionDefault?: { title: string; value: string };
  options: Array<{ title: string; value: string }>;
}

export const SelectType: React.FC<SelectTypeInterface> = ({
  column,
  item,
  options,
  optionDefault,
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item}>
      {/* <Form.Item> */}
        <Select placeholder={item.placeholder}>
          {/* <Select.Option value={optionDefault.value}>
            {optionDefault.title}
          </Select.Option> */}
          {options &&
            options.map((item) => (
              <Select.Option key={item.value} value={item.value}>{item.title}</Select.Option>
            ))}
        </Select>
      </Form.Item>
    </Col>
  );
};
