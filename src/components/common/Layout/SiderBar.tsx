import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { HomeOutlined, SettingOutlined } from '@ant-design/icons'

const { Item } = Menu
const { Sider } = Layout

interface SiderBarInterfaz {
  collapsed: boolean
}

export const SiderBar: React.FC<SiderBarInterfaz> = ({ collapsed }) => {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Item key="/" icon={<HomeOutlined />}>
          <Link to="/">Inicio</Link>
        </Item>
        <Item key="/reparaciones" icon={<SettingOutlined />}>
          <Link to="/reparaciones">Reparaciones</Link>
        </Item>
      </Menu>
    </Sider>
  )
}
