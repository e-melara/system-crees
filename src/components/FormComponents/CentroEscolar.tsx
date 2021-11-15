import * as React from 'react'
import {
  Form,
  Row,
  Divider,
  Button,
  message,
  Empty,
  PageHeader,
  Descriptions
} from 'antd'

import { RightOutlined } from "@ant-design/icons";

// redux
import { next, errorStatus } from 'src/redux/slicers/steps'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { searchCentroEscolar } from 'src/redux/slicers/thunk/centro'

import { H1Title, H2Title, DescriptionH3 } from 'src/styles'
import { SearchInput } from 'src/components/common'

export const CentroEscolar: React.FC = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const { centro, isNew, loading, search } = useAppSelector(
    (state) => state.centro
  )

  // handler
  const handlerFinish = () => {
    if (search && centro) {
      dispatch(next())
    }
  }

  const handlerSearch = (txt: string) => {
    const regex = new RegExp(/^\d{5}$/g)
    if (regex.exec(txt)) {
      dispatch(searchCentroEscolar(txt))
    } else {
      dispatch(errorStatus())
      message.error('Debes cumplir el formato del codigo (5 numeros)')
    }
    return
  }

  return (
    <>
      <H1Title>Centro Escolar</H1Title>
      <p>Debes digitar el codigo del centro escolar para poder continuar</p>
      <Form
        form={form}
        size="large"
        name="datos-personales"
        className="form-validated"
      >
        <Row gutter={24} justify="end">
          <SearchInput
            column={{ span: 8 }}
            input={{
              loading: loading,
              allowClear: true,
              onSearch: handlerSearch,
              placeholder: 'Codigo del centro escolar'
            }}
            item={{
              name: 'search'
            }}
          />
        </Row>

        {search && (
          <>
            <Divider />
            <H2Title>Informacion</H2Title>
            <PageHeader>
              <Descriptions size="middle" column={3}>
                <Descriptions.Item>
                  <DescriptionH3>
                    Codigo: <span>{centro.codigo}</span>
                  </DescriptionH3>
                </Descriptions.Item>
                <Descriptions.Item>
                  <DescriptionH3>
                    Centro Escolar: <span>{centro.nombre}</span>
                  </DescriptionH3>
                </Descriptions.Item>
                <Descriptions.Item>
                  <DescriptionH3>
                    Municipio: <span>{centro.municipio}</span>
                  </DescriptionH3>
                </Descriptions.Item>

                <Descriptions.Item span={2}>
                  <DescriptionH3>
                    Nombre del director(a):
                    <span>
                      {centro.dirNombres} {centro.dirApellidos}
                    </span>
                  </DescriptionH3>
                </Descriptions.Item>
                <Descriptions.Item>
                  <DescriptionH3>
                    DUI: <span>{centro.dirDUI}</span>
                  </DescriptionH3>
                </Descriptions.Item>
              </Descriptions>
            </PageHeader>
            <Divider />
          </>
        )}
        {isNew && (
          <>
            <Divider />
            <Empty
              description={
                <span>
                  Puedes agregar un nuevo centro escolar desde el boton "Crear
                  Ahora"
                </span>
              }
            >
              <Button type="primary">Crear Ahora</Button>
            </Empty>
            <Divider />
          </>
        )}

        <Row justify="start">
          <Button
            type="primary"
            htmlType="button"
            onClick={handlerFinish}
            disabled={!search}
          >
            Continuar <RightOutlined />
          </Button>
        </Row>
      </Form>
    </>
  )
}
