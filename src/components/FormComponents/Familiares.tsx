import * as React from 'react'
import { Table, Button, Row, Modal, Form, Tag } from 'antd'
import { PlusCircleFilled, PlusOutlined } from '@ant-design/icons'

import { H1Title } from 'src/styles'
import { add, next, prev } from 'src/redux/slicers/steps'
import { Familiar } from '../../redux/slicers/iterfaces'
import { useAppSelector, useAppDispatch } from 'src/redux/hooks'
import { InputType, SelectType, InputNumberType } from 'src/components/common'

const columns = [
  {
    key: 'nombre',
    title: 'Nombre',
    dataIndex: 'nombre'
  },
  {
    width: '100px',
    key: 'parentesco',
    title: 'Parentesco',
    dataIndex: 'parentesco',
    render: (data: string) => <Tag color="blue">{data.toUpperCase()}</Tag>
  },
  {
    width: '100px',
    key: 'profesion',
    title: 'Profesion',
    dataIndex: 'profesion',
    render: (profesion: string) => (
      <Tag color="magenta">{profesion.toUpperCase()}</Tag>
    )
  },
  {
    key: 'edad',
    title: 'Edad',
    width: '100px',
    dataIndex: 'edad'
  },
  {
    key: 'salario',
    width: '100px',
    title: 'Salario',
    dataIndex: 'salario',
    render: (salario: number) => <span>$ {salario.toFixed(2)}</span>
  },
  {
    key: 'aporte',
    width: '100px',
    title: 'Aporte',
    dataIndex: 'aporte',
    render: (aporte: number) => <span>$ {aporte.toFixed(2)}</span>
  }
]


export const Familiares = () => {
  const dispatch = useAppDispatch()

  const [isOpen, setIsOpen] = React.useState<boolean>()
  const { familiares } = useAppSelector((state) => state.steps)

  const validated = true
  const isShowLabel = false

  const [form] = Form.useForm()

  // Handler add persona
  const handlerFinishComplete = (values: any) => {
    setIsOpen(false)
    form.resetFields()
    dispatch(add(values))
  }

  // handler click next
  const handlerClickNext = () => {
    dispatch(next())
  }

  // handler click prev
  const handlerClickPrev = () => {
    dispatch(prev())
  }

  return (
    <>
      <H1Title>Datos familiares</H1Title>
      <p>
        La composición de mi grupo familiar es la siguiente:
        <em>El primer nombre de la lista es mi persona.</em> No incluyo a los
        hermanos que han formado aparte sus grupos familiares.
      </p>
      <Row justify="end" style={{ margin: '15px 0' }}>
        <Button
          icon={<PlusCircleFilled />}
          size="large"
          type="dashed"
          onClick={() => setIsOpen(true)}
        >
          Agregar familiar
        </Button>
      </Row>
      <Table
        pagination={false}
        columns={columns}
        dataSource={familiares}
        rowKey="id"
        bordered
        summary={(data: readonly any[]) => {
          let totalAporte = 0
          let totalSalario = 0
          data.forEach((element) => {
            totalAporte += element.aporte
            totalSalario += element.salario
          })
          return (
            <Table.Summary.Row>
              <Table.Summary.Cell index={1} colSpan={4}>
                Totales
              </Table.Summary.Cell>
              <Table.Summary.Cell index={2}>
                $ {totalSalario.toFixed(2)}
              </Table.Summary.Cell>
              <Table.Summary.Cell index={3}>
                $ {totalAporte.toFixed(2)}
              </Table.Summary.Cell>
            </Table.Summary.Row>
          )
        }}
      />
      <Row justify="space-between" style={{ margin: '20px 0' }}>
        <Button type="default" size="large" onClick={handlerClickPrev}>
          Anterior
        </Button>
        <Button type="primary" size="large" onClick={handlerClickNext}>
          Continuar
        </Button>
      </Row>
      <Modal
        width="50%"
        footer={null}
        okText="Agregar"
        visible={isOpen}
        closable={false}
        title="Agregar familiar"
        onCancel={() => setIsOpen(false)}
      >
        <Form
          form={form}
          size="large"
          layout="horizontal"
          onFinish={handlerFinishComplete}
        >
          <Row gutter={[24, 12]}>
            <InputType
              column={{ span: 12 }}
              input={{ placeholder: 'Nombre del familiar', allowClear: true }}
              item={{
                label: isShowLabel ? 'Nombre del familiar' : '',
                name: 'nombre',
                rules: [
                  { required: validated, message: 'El nombre es requerido' }
                ]
              }}
            />
            <SelectType
              column={{ span: 12 }}
              item={{
                label: isShowLabel ? 'Parentesco' : '',
                name: 'parentesco',
                placeholder: 'Parentesco',
                rules: [
                  { required: validated, message: 'El parentesco es requerido' }
                ]
              }}
              options={[
                { title: 'Mi persona', value: 'Yo' },
                { title: 'Madre', value: 'madre' },
                { title: 'Padre', value: 'padre' }
              ]}
            />
          </Row>
          <Row gutter={[24, 12]}>
            <InputType
              column={{ span: 6 }}
              input={{ placeholder: 'Edad', allowClear: true }}
              item={{
                label: isShowLabel ? 'Edad' : '',
                name: 'edad',
                rules: [
                  { required: validated, message: 'La edad es requerida' },
                  { min: validated, message: 'La edad minima es 1 año' }
                ]
              }}
            />
            <SelectType
              column={{ span: 8 }}
              item={{
                label: isShowLabel ? 'Profesion' : '',
                name: 'profesion',
                placeholder: 'Seleccione una Profesion',
                rules: [
                  { required: validated, message: 'La Profesion es requerida' }
                ]
              }}
              options={[
                { title: 'Estudiante', value: 'estudiante' },
                { title: 'Empleado', value: 'empleado' }
              ]}
            />
            <InputType
              column={{ span: 10 }}
              input={{ placeholder: 'Digite la ocupacion', allowClear: true }}
              item={{
                label: isShowLabel ? 'Ocupacion' : '',
                name: 'ocupacion',
                rules: [
                  { required: validated, message: 'La ocupacion es requerida' }
                ]
              }}
            />
          </Row>
          <Row gutter={[24, 12]}>
            <InputType
              column={{ span: 24 }}
              input={{
                placeholder: 'Lugar de trabajo o estudio',
                allowClear: true
              }}
              item={{
                label: isShowLabel ? 'Lugar de trabajo o estudio' : '',
                name: 'lugarTrabajo',
                rules: [
                  { required: validated, message: 'El Campo es requerido' }
                ]
              }}
            />
          </Row>
          <Row gutter={[24, 12]}>
            <InputNumberType
              column={{ span: 8 }}
              input={{
                placeholder: '* Salario Mensual',

                min: 0,
                max: 10000,
                precision: 2
              }}
              item={{
                label: isShowLabel ? 'Salario Mensual' : '',
                name: 'salario',
                rules: [
                  { required: validated, message: 'El Salario es requerido' }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                placeholder: '* Otros Ingresos',

                min: 0,
                max: 10000,
                precision: 2
              }}
              item={{
                label: isShowLabel ? 'Otros Ingresos' : '',
                name: 'otrosIngresos',
                rules: [
                  {
                    required: validated,
                    message: 'Otros Ingresos es necesario'
                  }
                ]
              }}
            />

            <InputNumberType
              column={{ span: 8 }}
              input={{
                min: 0,
                max: 10000,
                precision: 2,

                placeholder: '* Aporte al grupo familiar'
              }}
              item={{
                label: isShowLabel ? 'Aporte al grupo familiar' : '',
                name: 'aporte',
                rules: [
                  { required: validated, message: 'El Aporte es requerido' }
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
