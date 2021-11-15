import React from 'react'
import {
  Table,
  PageHeader,
  Descriptions,
  Row,
  Col,
  Divider,
  Button
} from 'antd'

import { LeftOutlined } from '@ant-design/icons'

import { DescriptionH3 } from 'src/styles'
import { prev } from 'src/redux/slicers/steps'
import { useAppSelector, useAppDispatch } from 'src/redux/hooks'

const columns = [
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
  }
]

export const Details = () => {
  const dispatch = useAppDispatch()
  const { centro, procedencia, equipos } = useAppSelector(
    (state) => state.centro
  )

  const data = equipos.map((e) => ({
    tipo: e.tipo?.title,
    marca: e.marca?.title,
    serie: e.serie,
    key: e.key
  }))

  return (
    <>
      <Row gutter={[24, 24]}>
        <PageHeader title="Centro Escolar">
          <Descriptions column={3}>
            <Descriptions.Item>
              <DescriptionH3>
                Codigo: <span>{centro.codigo}</span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item>
              <DescriptionH3>
                Nombre: <span>{centro.nombre}</span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item>
              <DescriptionH3>
                Municipio: <span>{centro.municipio}</span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item span={2}>
              <DescriptionH3>
                Director:
                <span>
                  {centro.dirNombres} {centro.dirApellidos}
                </span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item span={2}>
              <DescriptionH3>
                DUI: <span>{centro.dirDUI}</span>
              </DescriptionH3>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <Divider>Equipos</Divider>
        <Col span={24}>
          <Table
            bordered
            rowKey="key"
            pagination={false}
            dataSource={data}
            columns={columns}
          />
        </Col>
        <Divider>Datos</Divider>
        <PageHeader
          title={'Responsable'}
          subTitle={
            procedencia.directorOrPersona?.type === 1 ? 'Director' : 'Persona'
          }
        >
          <Descriptions column={4}>
            <Descriptions.Item span={2}>
              <DescriptionH3>
                Nombre completo:
                <span>{procedencia.directorOrPersona?.nombresCompleto}</span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item>
              <DescriptionH3>
                Telefono:
                <span>{procedencia.directorOrPersona?.phone}</span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item>
              <DescriptionH3>
                Documento:
                <span>{procedencia.directorOrPersona?.documento}</span>
              </DescriptionH3>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <PageHeader
          title="Procendecia"
          subTitle={
            procedencia.studentOrTeacher?.type === 3 ? 'Estudiante' : 'Docente'
          }
        >
          <Descriptions column={3}>
            <Descriptions.Item span={2}>
              <DescriptionH3>
                Nombre completo:
                <span>{procedencia.studentOrTeacher?.nombresCompleto}</span>
              </DescriptionH3>
            </Descriptions.Item>
            <Descriptions.Item>
              <DescriptionH3>
                Documento:
                <span>{procedencia.studentOrTeacher?.documento}</span>
              </DescriptionH3>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <PageHeader title="Responsable de Firma" subTitle="CEDE">
          <Descriptions column={1}>
            <Descriptions.Item>
              {procedencia.firmaCEDE?.title}
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
        <PageHeader title="Observacion">
          <Descriptions column={1}>
            <Descriptions.Item>{procedencia.observacion}</Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Row>
      <Row justify="space-between" style={{ margin: '20px 0' }}>
        <Button
          type="default"
          icon={<LeftOutlined />}
          size="large"
          onClick={() => dispatch(prev())}
        >
          Anterior
        </Button>
        <Button type="primary" size="large">
          Siguiente
        </Button>
      </Row>
    </>
  )
}
