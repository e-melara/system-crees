import React from 'react'
import { Col, Input, Form } from 'antd'

interface InputTypeInterface {
  column: { span: number }
  item: {
    name: string
    label: string
    extra?: string
    rules?: Array<Object>
  }
  input: {
    allowClear?: boolean
    placeholder: string
    disabled?: boolean
  }
}

export const InputType: React.FC<InputTypeInterface> = ({
  column,
  item,
  input
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item}>
        {/* <Form.Item > */}
        <Input {...input} />
      </Form.Item>
    </Col>
  )
}
