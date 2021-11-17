import React from 'react'
import { Col, InputNumber, Form } from 'antd'

interface InputTypeNumberInterface {
  column: { span: number }
  item: {
    name: string
    label: string
    extra?: string
    rules?: Array<Object>
  }
  input: {
    min: number
    max: number
    precision?: number
    disabled?: boolean
    placeholder: string
  }
}

export const InputNumberType: React.FC<InputTypeNumberInterface> = ({
  column,
  item,
  input
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item} hasFeedback>
        <InputNumber {...input} className='input-width' />
      </Form.Item>
    </Col>
  )
}
