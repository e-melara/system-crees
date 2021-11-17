import React from 'react'
import InputMask from 'react-input-mask'
import { Col, Input, Form } from 'antd'

interface InputTypeInterface {
  column: { span: number }
  item: {
    name: string
    label: string
    help?: string
    rules?: Array<Object>
  }
  input: {
    allowClear?: boolean
    placeholder: string
    disabled?: boolean
    mask: string
  }
}

export const InputTypeMask: React.FC<InputTypeInterface> = ({
  column,
  item,
  input
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item} hasFeedback>
        <InputMask mask={input.mask} autoComplete="off">
          {(inputProps: any) => <Input {...input} {...inputProps} />}
        </InputMask>
      </Form.Item>
    </Col>
  )
}
