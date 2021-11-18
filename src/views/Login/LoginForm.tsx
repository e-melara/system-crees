import React from 'react'
import { Form, Input, Button } from 'antd'

import Logo from 'src/assets/logo.png'
import { useAppDispatch } from 'src/redux/hooks'
import { login } from 'src/redux/slicers/thunk/auth'

export const LoginForm = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const handlerSubmitValue = (values: any) => {
    dispatch(login(values))
  }

  return (
    <div className="login-form-panel">
      <div className="login-main">
        <div className="logo-login">
          <img className="img-fluid for-light" src={Logo} alt="looginpage" />
        </div>
        <Form
          form={form}
          onFinish={handlerSubmitValue}
          autoComplete="off"
          layout="vertical"
          className="theme-form"
        >
          <h4>Ingresa a tu cuenta</h4>
          <p>Ingresa tu usuario y contraseña para loguarte</p>
          <Form.Item
            name="username"
            label="Usuario"
            hasFeedback
            className="form-input-label"
            rules={[
              { required: true, message: 'El usuario es necesario' },
              {
                min: 8,
                message: 'El tamaño minimo es de 8 caracteres'
              }
            ]}
          >
            <Input
              className="form-control form-input"
              placeholder="Digite el usuario"
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            hasFeedback
            className="form-input-label"
            rules={[
              { required: true, message: 'La contraseña es necesaria' },
              {
                min: 8,
                message: 'El tamaño minimo es de 8 caracteres'
              }
            ]}
          >
            <Input
              type="password"
              className="form-control form-input"
              placeholder="Digite la contraseña"
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" block size="large" type="primary">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
