import React from 'react'
import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'

const { Header } = Layout

interface HeaderInterfaces {
  collapsed: boolean
  handlerCollapsed: () => void
}

const HeaderComponent: React.FC<HeaderInterfaces> = ({
  collapsed,
  handlerCollapsed
}) => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: handlerCollapsed
      })}
    </Header>
  )
}

export { HeaderComponent as Header }
