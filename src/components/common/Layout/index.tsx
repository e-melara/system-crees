import React from 'react'
import { Layout } from 'antd'

import './layout.css'
import { Header } from './Header'
import { SiderBar } from './SiderBar'

import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { toggleSidebar } from 'src/redux/slicers/ui'

const { Content } = Layout

const LayoutComponent: React.FC = ({ children }) => {
  const dispatch = useAppDispatch()
  const { collapse } = useAppSelector((state) => state.ui)

  return (
    <Layout>
      <SiderBar collapsed={collapse} />
      <Layout className="site-layout">
        <Header
          collapsed={true}
          handlerCollapsed={() => dispatch(toggleSidebar())}
        />
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            minHeight: 280,
            margin: '24px 16px'
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export { LayoutComponent as Layout }
