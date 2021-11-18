import React from 'react'
import { Col, Row } from 'antd'

import './login.css'
import { LoginForm } from './LoginForm'
import { useAppSelector } from 'src/redux/hooks'
import LogoEnlance from 'src/assets/logo-enlance.png'
import { Loading } from 'src/components/Loading/Loading'

export const LoginPage = () => {
  const { loading } = useAppSelector((state) => state.auth)
  if (loading) {
    return <Loading />
  }
  return (
    <Row className="layout-complete">
      <Col span={13}>
        <figure className="figure-logo">
          <img src={LogoEnlance} alt="imagen de logo enlace" />
        </figure>
      </Col>
      <Col span={11} className="background-login">
        <div className="contenedor-panel-login">
          <LoginForm />
        </div>
      </Col>
    </Row>
  )
}
