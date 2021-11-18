import React from 'react'
import {
  PlusOutlined,
  DownOutlined,
  SearchOutlined,
  CalendarOutlined
} from '@ant-design/icons'

import { Link } from 'react-router-dom'
import { Col, Row, Input, Space, Dropdown, Button, Menu } from 'antd'

import { Layout } from 'src/components/common/Layout'

const Search = Input.Search

const menu = (
  <Menu>
    <Menu.Item key="1">Entregados</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="0">Limpiar</Menu.Item>
  </Menu>
)

export const Reparacion: React.FC = () => {
  return (
    <Layout>
      <Row gutter={[24, 24]} className="p-2" justify="space-between">
        <Col span={10}></Col>
        <Col span={14}>
          <Space size="middle" style={{ float: 'right' }}>
            {/* <Dropdown overlay={menu}>
              <span
                style={{
                  fontSize: '1rem',
                  color: 'var(--antd-wave-shadow-color)',
                  cursor: 'pointer'
                }}
                className="ant-dropdown-link"
              >
                Filtrar por <DownOutlined />
              </span>
            </Dropdown> */}

            <Search
              size="large"
              allowClear
              placeholder="Buscar ...."
              enterButton={<SearchOutlined />}
              style={{ width: 300, float: 'right' }}
            />
            {/* <Button size="large" type="default" icon={<CalendarOutlined />}>
              Reportes
            </Button> */}
            <Link to="/reparaciones/nueva">
              <Button type="primary" icon={<PlusOutlined />} size="large">
                Nueva
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
    </Layout>
  )
}
