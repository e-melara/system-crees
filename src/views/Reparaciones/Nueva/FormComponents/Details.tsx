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

import { LeftOutlined, SendOutlined } from '@ant-design/icons'

import { DescriptionH3 } from 'src/styles'
import { prev } from 'src/redux/slicers/steps'
import { mantenimientoSave } from 'src/redux/slicers/thunk/centro'
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

  const handlerClickSaveSend = React.useCallback(() => {
    dispatch(
      mantenimientoSave({
        centro,
        procedencia,
        equipos
      })
    )
  }, [centro, procedencia, equipos, dispatch])

  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          <PageHeader>
            <Descriptions
              column={3}
              bordered
              title="Centro Escolar"
              size="small"
            >
              <Descriptions.Item label="Codigo">
                <DescriptionH3>
                  <span>{centro.codigo}</span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="Nombre">
                <DescriptionH3>
                  <span>{centro.nombre}</span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="Municipio">
                <DescriptionH3>
                  <span>{centro.municipio}</span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item span={2} label="Director">
                <DescriptionH3>
                  <span>
                    {centro.dirNombres} {centro.dirApellidos}
                  </span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="DUI">
                <DescriptionH3>
                  <span>{centro.dirDUI}</span>
                </DescriptionH3>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Col>
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
        <Col span={24}>
          <PageHeader>
            <Descriptions column={2} title="Responsable" bordered size="small">
              <Descriptions.Item label="Tipo de persona">
                <DescriptionH3>
                  <span>
                    {procedencia.directorOrPersona?.type === 1
                      ? 'Director'
                      : 'Familiar'}
                  </span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="Nombre completo">
                <DescriptionH3>
                  <span>{procedencia.directorOrPersona?.nombresCompleto}</span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="Telefono">
                <DescriptionH3>
                  <span>{procedencia.directorOrPersona?.phone}</span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="DUI">
                <DescriptionH3>
                  <span>{procedencia.directorOrPersona?.documento}</span>
                </DescriptionH3>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <PageHeader>
            <Descriptions column={3} bordered title="Procedencia">
              <Descriptions.Item label="Tipo de persona">
                <DescriptionH3>
                  <span>
                    {procedencia.studentOrTeacher?.type === 3
                      ? 'Estudiante'
                      : 'Docente'}
                  </span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item label="Nombre completo">
                <DescriptionH3>
                  <span>{procedencia.studentOrTeacher?.nombresCompleto}</span>
                </DescriptionH3>
              </Descriptions.Item>
              <Descriptions.Item
                label={procedencia.studentOrTeacher?.type === 3 ? 'NIE' : 'NUP'}
              >
                <DescriptionH3>
                  <span>{procedencia.studentOrTeacher?.documento}</span>
                </DescriptionH3>
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <PageHeader>
            <Descriptions
              column={1}
              title="Responsable de Firma - CEDE"
              bordered
            >
              <Descriptions.Item label="Persona a cargo">
                {procedencia.firmaCEDE?.title}
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
          <PageHeader>
            <Descriptions column={1} title="Observacion" bordered>
              <Descriptions.Item label="Detalle">
                {procedencia.observacion}
              </Descriptions.Item>
            </Descriptions>
          </PageHeader>
        </Col>
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
        <Button
          type="primary"
          size="large"
          icon={<SendOutlined />}
          onClick={handlerClickSaveSend}
        >
          Enviar
        </Button>
      </Row>
    </>
  )
}
