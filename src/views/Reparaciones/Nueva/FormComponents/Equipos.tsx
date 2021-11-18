import { v4 } from 'uuid'
import * as React from 'react'
import { Table, Button, Row, Modal, Form, message } from 'antd'
import {
  PlusCircleFilled,
  PlusOutlined,
  RestOutlined,
  RightOutlined,
  LeftOutlined
} from '@ant-design/icons'

import { H1Title } from 'src/styles'
import { next, prev } from 'src/redux/slicers/steps'
import { InputType, SelectType } from 'src/components/common'
import { useAppSelector, useAppDispatch } from 'src/redux/hooks'

import { addEquipo, removeEquipo } from 'src/redux/slicers/centro-escolar'

export const Equipos = () => {
  const dispatch = useAppDispatch()
  const [isOpen, setIsOpen] = React.useState<boolean>()
  const {
    equipos,
    data: { tipo, marcas }
  } = useAppSelector((state) => state.centro)

  const [form] = Form.useForm()

  // Handler add equipo
  const handlerFinishComplete = (values: any) => {
    setIsOpen(false)
    form.resetFields()
    message.info('El equipo fue agregado con exito')
    const uid = v4()
    dispatch(
      addEquipo({
        key: uid,
        serie: values.serie,
        tipo: tipo.find((t) => t.value === values.tipo),
        marca: marcas.find((m) => m.value === values.marca)
      })
    )
  }

  // remove equipo
  const handlerDeleteEquipo = React.useCallback(
    (id: string) => {
      dispatch(removeEquipo(id))
      message.error('El equipo fue eliminado con exito')
    },
    [dispatch]
  )

  const data = equipos?.map((e) => ({
    id: e.key,
    tipo: e.tipo?.title,
    marca: e.marca?.title,
    serie: e.serie
  }))

  const columns = React.useMemo(
    () => [
      {
        key: 'tipo',
        dataIndex: 'tipo',
        title: 'Tipo de equipo'
      },
      {
        key: 'marca',

        dataIndex: 'marca',
        title: 'Marca del equipo'
      },
      {
        key: 'serie',
        title: 'Serie de equipo',
        dataIndex: 'serie'
      },
      {
        width: '100px',
        title: '',
        dataIndex: 'action',
        render: (_: any, record: any) => {
          return (
            <Button
              onClick={() => handlerDeleteEquipo(record['id'])}
              size="middle"
              type="primary"
              danger
              icon={<RestOutlined />}
            >
              Borrar
            </Button>
          )
        }
      }
    ],
    [handlerDeleteEquipo]
  )

  return (
    <>
      <H1Title>Equipos</H1Title>
      <p>Agregar la informacion del equipo o equipos a reparar.</p>
      <Row justify="end" style={{ margin: '15px 0' }}>
        <Button
          icon={<PlusCircleFilled />}
          size="large"
          type="dashed"
          onClick={() => setIsOpen(true)}
        >
          Agregar equipo
        </Button>
      </Row>
      <Table
        bordered
        pagination={false}
        columns={columns}
        dataSource={data}
        rowKey="id"
      />
      <Row justify="space-between" style={{ margin: '20px 0' }}>
        <Button
          type="default"
          icon={<LeftOutlined />}
          size="large"
          onClick={() => dispatch(prev())}
        >
          Anterior
        </Button>
        <Button
          disabled={equipos.length === 0}
          type="primary"
          size="large"
          onClick={() => dispatch(next())}
        >
          Siguiente <RightOutlined />
        </Button>
      </Row>
      <Modal
        width="50%"
        footer={null}
        okText="Agregar"
        visible={isOpen}
        closable={false}
        title="Agregar equipo"
        onCancel={() => setIsOpen(false)}
      >
        <Form
          form={form}
          size="large"
          autoComplete="off"
          layout="horizontal"
          onFinish={handlerFinishComplete}
        >
          <Row gutter={[24, 12]}>
            <SelectType
              column={{ span: 8 }}
              item={{
                label: '',
                name: 'tipo',
                placeholder: 'Tipo de equipo',
                rules: [
                  {
                    required: true,
                    message: 'El tipo de equipo es requerido'
                  }
                ]
              }}
              options={tipo}
            />
            <SelectType
              column={{ span: 8 }}
              item={{
                label: '',
                name: 'marca',
                placeholder: 'Marca del equipo',
                rules: [
                  {
                    required: true,
                    message: 'La maraca del equipo es requerida'
                  }
                ]
              }}
              options={marcas}
            />
            <InputType
              input={{
                placeholder: 'Serie del equipo',
                allowClear: true
              }}
              column={{ span: 8 }}
              item={{
                label: '',
                name: 'serie',
                rules: [
                  {
                    required: true,
                    pattern: new RegExp('^[A-Za-z0-9]{3,15}$','g'),
                    message: 'El campo es necesario y solo puede contener letras y/o numeros'
                  }
                ]
              }}
            />
          </Row>
          <Row justify="space-between">
            <Button
              type="default"
              htmlType="button"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button type="primary" icon={<PlusOutlined />} htmlType="submit">
              Agregar
            </Button>
          </Row>
        </Form>
      </Modal>
    </>
  )
}
