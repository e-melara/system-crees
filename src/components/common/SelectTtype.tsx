import React from 'react'
import { Col, Select, Form } from 'antd'

interface SelectTypeInterface {
  column: { span: number }
  item: {
    name: string
    label: string
    extra?: string
    rules?: Array<Object>
    placeholder?: string
  }
  onChange?: any
  optionDefault?: { title: string; value: string }
  options: Array<{ title: string; value: any }>
}

export const SelectType: React.FC<SelectTypeInterface> = ({
  column,
  item,
  options,
  onChange,
  optionDefault
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item}>
        <Select placeholder={item.placeholder} onChange={onChange}>
          {options &&
            options.map((item) => (
              <Select.Option key={item.value} value={item.value}>
                {item.title}
              </Select.Option>
            ))}
        </Select>
      </Form.Item>
    </Col>
  )
}
