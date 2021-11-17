import React from 'react'
import { Col, Input, Form } from 'antd'

const Search = Input.Search

interface SearchTypeInterface {
  column: { span: number }
  item: {
    name: string
    label?: string
    extra?: string
    rules?: Array<Object>
  }
  input: {
    loading?: boolean
    allowClear?: boolean
    placeholder: string
    enterButton?: string
    onSearch: (txt: string) => void
  }
}

export const SearchInput: React.FC<SearchTypeInterface> = ({
  column,
  input,
  item
}) => {
  return (
    <Col {...column}>
      <Form.Item {...item} hasFeedback>
        <Search {...input} autoComplete="off" />
      </Form.Item>
    </Col>
  )
}
