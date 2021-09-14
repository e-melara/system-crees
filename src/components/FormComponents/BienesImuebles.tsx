import * as React from 'react'
import { Row, Modal, Button, Table, Form } from 'antd'
import { PlusCircleFilled, PlusOutlined } from '@ant-design/icons'

import { H1Title } from 'src/styles'
import { BieneInmueble } from 'src/redux/slicers/iterfaces'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { InputNumberType, SelectType, InputType } from 'src/components/common'

const columns = [
  {
    key: 'tipo',
    title: 'Tipo',
    dataIndex: 'tipo'
  },
  {
    key: 'habitaciones',
    title: 'Habitaciones o Extension (en V2) ',
    dataIndex: 'habitaciones'
  },
  {
    key: 'valor',
    title: 'Valor de compra',
    dataIndex: 'valor'
  },
  {
    key: 'rentaMensual',
    title: 'Renta Mensual',
    dataIndex: 'rentaMensual'
  },

  {
    key: 'valorActual',
    title: 'Valor actual',
    dataIndex: 'valorActual'
  }
]

export const BienesImuebles = () => {
  const dispatch = useAppDispatch()
  const { bienesInmuebles } = useAppSelector((state) => state.steps)

  // variables de control
  const validated = false
  const isShowLabel = false

  // use state
  const [isOpen, setIsOpen] = React.useState(false)

  // form a utilizar
  const [form] = Form.useForm()

  // handler next
  const handlerClickNext = () => {}
  // handler prev
  const handlerClickPrev = () => {}
  // handler Fnishing
  const handlerFinishComplete = (values: BieneInmueble) => {}

  return (
    <>
      <H1Title>Bienes Inmuebles</H1Title>
      <p>{/* TODO: Cambiar el texto */}</p>
      <Row justify="end" style={{ margin: '15px 0' }}>
        <Button
          icon={<PlusCircleFilled />}
          size="large"
          type="dashed"
          onClick={() => setIsOpen(true)}
        >
          Agregar inmueble
        </Button>
      </Row>
      <Table
        rowKey="id"
        bordered
        pagination={false}
        columns={columns}
        dataSource={bienesInmuebles}
        summary={(data: readonly BieneInmueble[]) => {
          let totalValorCompra = 0
          let totalRentaMensual = 0
          let totalValorActual = 0

          data.forEach((element: BieneInmueble) => {
            totalRentaMensual += element.rentaMensual
            totalValorActual += element.valorActual
            totalValorCompra += element.valor
          })
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={1} colSpan={2}>
                <b>Totales</b>
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                $ {totalValorCompra.toFixed(2)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                $ {totalRentaMensual.toFixed(2)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                $ {totalValorActual.toFixed(2)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )
        }}
      />
      <Row justify="space-between" style={{ margin: '20px 0' }}>
        <Button type="default" size="large" onClick={handlerClickNext}>
          Anterior
        </Button>
        <Button type="primary" size="large" onClick={handlerClickPrev}>
          Continuar
        </Button>
      </Row>
      <Modal
        width="50%"
        footer={null}
        okText="Agregar"
        visible={isOpen}
        closable={false}
        title="Agregar bien inmueble"
        onCancel={() => setIsOpen(false)}
      >
        <Form
          form={form}
          size="large"
          layout="horizontal"
          initialValues={{
            esCredicto: 'No'
          }}
          onFinish={handlerFinishComplete}
        >
          <Row gutter={[24, 12]}>
            <SelectType
              column={{ span: 8 }}
              item={{
                name: 'tipo',
                label: isShowLabel ? 'Tipo' : '',
                placeholder: 'Tipo del inmueble',
                rules: [
                  { required: validated, message: 'El Tipo es requerido' }
                ]
              }}
              options={[
                { title: 'Casa', value: 'Casa' },
                { title: 'Finca', value: 'Finca' },
                { title: 'Solar', value: 'Solar' },
                { title: 'Local', value: 'Local' }
              ]}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 2,
                placeholder: '* Valor de compra'
              }}
              item={{
                label: isShowLabel ? 'Valor' : '',
                name: 'valor',
                rules: [
                  {
                    required: validated,
                    message: 'Valor es necesario'
                  }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 2,
                placeholder: '* Total de habitaciones'
              }}
              item={{
                label: isShowLabel ? 'Habitaciones' : '',
                name: 'habitaciones',
                rules: [
                  {
                    required: validated,
                    message: 'Total de habitaciones es requerido'
                  }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 2,
                placeholder: '* Valor actual'
              }}
              item={{
                label: isShowLabel ? 'Valor actual' : '',
                name: 'valorActual',
                rules: [
                  {
                    required: validated,
                    message: 'Valor actual es requerido'
                  }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 2,
                placeholder: '* Renta Mensual'
              }}
              item={{
                label: isShowLabel ? 'Renta' : '',
                name: 'rentaMensual',
                rules: [
                  {
                    required: validated,
                    message: 'Renta Mensual es requerida'
                  }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 0,
                placeholder: '* Año de compra'
              }}
              item={{
                label: isShowLabel ? 'Año' : '',
                name: 'year',
                rules: [
                  {
                    required: validated,
                    message: 'Año de compra es requerido'
                  }
                ]
              }}
            />

            <InputType
              column={{ span: 24 }}
              input={{
                placeholder: 'Persona o Institucion vendedora',
                allowClear: true
              }}
              item={{
                label: isShowLabel ? 'Persona o Institucion vendedora' : '',
                name: 'personaOInstitucion',
                rules: [
                  {
                    required: validated,
                    message: 'Persona o Institucion vendedora es requerido'
                  }
                ]
              }}
            />
            <SelectType
              column={{ span: 9 }}
              item={{
                name: 'esCredicto',
                extra: 'El inmueble es por medio de credicto',
                label: isShowLabel ? '¿Es por credicto?' : '',
                placeholder: '¿Es un credicto?'
              }}
              options={[
                { title: 'Si', value: 'Si' },
                { title: 'No', value: 'No' }
              ]}
            />

            <InputNumberType
              column={{ span: 7 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 0,
                placeholder: '* Cuota mensual'
              }}
              item={{
                name: 'valorLetraMenual',
                extra: 'Valor de la cuota mensual',
                label: isShowLabel ? 'Cuota' : '',
                rules: [
                  {
                    required: validated,
                    message: 'Valor de la cuota mensual es requerida'
                  }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 1000000,
                precision: 0,
                placeholder: '* Saldo Actual'
              }}
              item={{
                label: isShowLabel ? 'Saldo' : '',
                name: 'saldoActual',
                extra: 'Saldo Actual de la deuda',
                rules: [
                  {
                    required: validated,
                    message: 'Saldo Actual es requerido'
                  }
                ]
              }}
            />

          </Row>
        </Form>
      </Modal>
    </>
  )
}
