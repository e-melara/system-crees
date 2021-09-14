import React from 'react'
import { Col, Input, Form } from 'antd'

const { TextArea } = Input

interface TextAreaTypeInterface {
  column: { span: number }
  item: {
    name: string
    label: string
    extra?: string
    rules?: Array<Object>
  }
  input: {
    rows: number
    cols: number
    allowClear?: boolean
    placeholder: string
    disabled?: boolean
  }
}

export const TextAreaType: React.FC<TextAreaTypeInterface> = ({
  column,
  item,
  input
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item}>
        <TextArea {...input} />
      </Form.Item>
    </Col>
  )
}
