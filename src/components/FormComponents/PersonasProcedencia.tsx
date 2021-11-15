import * as React from 'react'
import { Form, Divider, Button, Row } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import { H1Title } from 'src/styles'
import { TypePersona } from 'src/redux/slicers/interfaces'
import { next, prev, errorStatus } from 'src/redux/slicers/steps'
import { addProcedencia } from 'src/redux/slicers/centro-escolar'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'
import { SelectType, InputType, TextAreaType } from 'src/components/common'

export const PersonasProcedencia = () => {
  const [form] = Form.useForm()
  const dispatch = useAppDispatch()

  const {
    procedencia,
    data: { personas }
  } = useAppSelector((state) => state.centro)

  const [isStudent, setIsStudent] = React.useState(true)
  const [isDirector, setIsDirector] = React.useState(true)

  const options = [
    { value: 3, title: 'Estudiante' },
    { value: 4, title: 'Maestro' }
  ]

  const optionsFirma = [
    { value: 1, title: 'Director' },
    { value: 2, title: 'Otros' }
  ]

  const hanlderChangeSelect = React.useCallback((item: number) => {
    setIsStudent(item === 3)
  }, [])

  const hanlderChangeFirmaSelect = React.useCallback((item: number) => {
    setIsDirector(item === 1)
  }, [])

  const handlerFinishError = React.useCallback(() => {
    dispatch(errorStatus())
  }, [dispatch])

  const handlerFinish = React.useCallback(
    (values: any) => {
      dispatch(
        addProcedencia({
          studentOrTeacher: {
            documento: values.nieOrNup,
            type:
              values.studentOrTeacher === 3
                ? TypePersona.STUDENT
                : TypePersona.TEACHER,
            nombresCompleto: values.nombresSTPersona
          },
          directorOrPersona: {
            type:
              values.tipoDOFirma === 1
                ? TypePersona.DIRECTOR
                : TypePersona.PERSONA,
            phone: values.phoneDOPersona,
            documento: values.duiPersonaFirma || '',
            nombresCompleto: values.nombresFirmaPersona || ''
          },
          observacion: values.observacion,
          firmaCEDE: personas.find((p) => p.value === values.firmaCEDE)
        })
      )
      dispatch(next())
    },
    [dispatch, personas]
  )

  const typeDirector = procedencia.directorOrPersona?.type || 1
  const typeStudent = procedencia.studentOrTeacher?.type || 3

  return (
    <>
      <Form
        form={form}
        size="large"
        autoComplete="off"
        onFinish={handlerFinish}
        onFinishFailed={handlerFinishError}
        initialValues={{
          firmaCEDE: procedencia.firmaCEDE?.value || 1,
          tipoDOFirma: typeDirector,
          studentOrTeacher: typeStudent,
          // Datos del estudiante
          nieOrNup: procedencia.studentOrTeacher?.documento || '',
          nombresSTPersona: procedencia.studentOrTeacher?.nombresCompleto || '', // P
          // responsable
          duiPersonaFirma: procedencia.directorOrPersona?.documento || '',
          nombresFirmaPersona:
            procedencia.directorOrPersona?.nombresCompleto || '',
          phoneDOPersona: procedencia.directorOrPersona?.phone,
          // observaciones
          observacion: procedencia.observacion || ''
        }}
      >
        <H1Title>Persona</H1Title>
        <p>
          Se solicita la informacion de la persona a carga del equipo ya sea un
          alumno o maestro
        </p>
        <Divider />
        <Row>
          <SelectType
            column={{ span: 4 }}
            item={{
              name: 'studentOrTeacher',
              label: '',
              placeholder: 'Tipo de persona a cargo',
              rules: [{ required: true, message: 'El campo es necesario' }]
            }}
            options={options}
            onChange={hanlderChangeSelect}
          />
          <InputType
            column={{ span: 6 }}
            input={{
              placeholder: isStudent
                ? 'Digite el NIE del estudiante'
                : 'Digite el NUP del maestro',
              allowClear: true
            }}
            item={{
              label: '',
              name: 'nieOrNup',
              rules: [{ required: true, message: 'El campo es necesario' }]
            }}
          />
          <InputType
            column={{ span: 14 }}
            input={{
              placeholder: `Nombres y apellidos del ${
                isStudent ? 'estudiante' : 'maestro'
              }`,
              allowClear: true
            }}
            item={{
              label: '',
              name: 'nombresSTPersona',
              rules: [{ required: true, message: 'El campo es necesario' }]
            }}
          />
        </Row>
        <H1Title>Firmas</H1Title>
        <p>
          Seleccionar la persona que firmara el A-F9 ya sea el director o otra
          persona
        </p>
        <Divider />
        <Row>
          <SelectType
            column={{ span: 4 }}
            item={{
              name: 'tipoDOFirma',
              label: '',
              placeholder: 'Persona que firma',
              rules: [{ required: true, message: 'El campo es necesario' }]
            }}
            options={optionsFirma}
            onChange={hanlderChangeFirmaSelect}
          />
          {!isDirector && (
            <>
              <InputType
                column={{ span: 4 }}
                input={{
                  placeholder: 'DUI de la persona',
                  allowClear: true
                }}
                item={{
                  label: '',
                  name: 'duiPersonaFirma',
                  rules: [
                    { required: !isDirector, message: 'El campo es necesario' }
                  ]
                }}
              />
              <InputType
                column={{ span: 10 }}
                input={{
                  placeholder: 'Nombres y apellidos de la persona',
                  allowClear: true
                }}
                item={{
                  label: '',
                  name: 'nombresFirmaPersona',
                  rules: [
                    { required: !isDirector, message: 'El campo es necesario' }
                  ]
                }}
              />
            </>
          )}
          <InputType
            column={{ span: 6 }}
            input={{
              placeholder: 'Telefono del encargado',
              allowClear: true
            }}
            item={{
              label: '',
              name: 'phoneDOPersona',
              rules: [{ required: true, message: 'El campo es necesario' }]
            }}
          />
        </Row>
        <H1Title>Cede</H1Title>
        <p>Seleccione la persona de la CEDE que va firmar el A-F9</p>
        <Divider />
        <Row>
          <SelectType
            column={{ span: 8 }}
            item={{
              name: 'firmaCEDE',
              label: '',
              placeholder: 'Persona que firma',
              rules: [{ required: true, message: 'El campo es necesario' }]
            }}
            options={personas}
          />
        </Row>
        <H1Title>Observaciones</H1Title>
        <p>Motivos por los cuales se van a reparar el equipo</p>
        <Divider />
        <Row>
          <TextAreaType
            column={{ span: 24 }}
            input={{
              cols: 4,
              rows: 4,
              allowClear: true,
              placeholder: 'Detalles que se le encontro al equipo'
            }}
            item={{
              label: '',
              name: 'observacion',
              rules: [
                {
                  required: true,
                  message: 'El campo es necesario'
                }
              ]
            }}
          />
        </Row>
        <Row justify="space-between" style={{ margin: '20px 0' }}>
          <Button
            icon={<LeftOutlined />}
            type="default"
            size="large"
            onClick={() => dispatch(prev())}
          >
            Anterior
          </Button>
          <Button type="primary" size="large" htmlType="submit">
            Siguiente <RightOutlined />
          </Button>
        </Row>
      </Form>
    </>
  )
}
