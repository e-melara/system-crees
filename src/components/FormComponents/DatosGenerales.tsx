import * as React from 'react'
import { Form, Row, Divider, Input, Button, message } from 'antd'

// redux
import { useAppDispatch } from 'src/redux/hooks'
import { next, errorStatus } from 'src/redux/slicers/steps'

import { H1Title, H2Title } from '../../styles'
import { InputType, SelectType } from 'src/components/common'

export const DatosGenerales: React.FC = () => {
 const [form] = Form.useForm()

 let validated = false
 const dispatch = useAppDispatch()

 const handlerFinish = (values: any) => {
  dispatch(next())
 }
 const handlerFinishFailed = (errorInfo: any) => {
  message.error('revisa el formulario y corrige los errores')
  dispatch(errorStatus())
 }

 return (
  <>
   <H1Title>Datos generales</H1Title>
   <p>Responda verazmente a cada una de las preguntas del cuestionario.</p>
   <Form
    form={form}
    size="large"
    name="datos-personales"
    className="form-validated"
    initialValues={{
     genero: ''
    }}
    onFinish={handlerFinish}
    onFinishFailed={handlerFinishFailed}
   >
    <H2Title>Datos Personales</H2Title>
    <Row gutter={24}>
     <InputType
      column={{ span: 8 }}
      item={{
       label: 'Nombres',
       name: 'nombres',
       rules: [{ required: validated, message: 'El nombre es obligatorio' }]
      }}
      input={{
       placeholder: 'Digite su nombre completo',
       allowClear: true
      }}
     />
     <InputType
      column={{ span: 8 }}
      item={{
       label: 'Apellidos',
       name: 'apellidos',
       rules: [{ required: validated }]
      }}
      input={{
       placeholder: 'Digite sus apellidos',
       allowClear: true
      }}
     />
     <SelectType
      column={{ span: 8 }}
      item={{
       label: 'Genero',
       name: 'genero',
       rules: [{ required: validated }],
       placeholder: 'Seleccione un genero'
      }}
      optionDefault={{ title: '[Genero]', value: '' }}
      options={[
       { title: 'Masculino', value: 'masculino' },
       { title: 'Femenino', value: 'femenino' }
      ]}
     />
    </Row>
    <Divider />
    <H2Title>Residencia</H2Title>
    <Row gutter={24}>
     <SelectType
      column={{ span: 8 }}
      item={{
       label: 'Departamento',
       name: 'departamento',
       rules: [{ required: validated }],
       placeholder: 'Seleccione un departamento'
      }}
      optionDefault={{ title: '[Departamento]', value: '' }}
      options={[{ value: '02', title: 'La Libertad' }]}
     />
     <SelectType
      column={{ span: 8 }}
      item={{
       label: 'Municipio',
       name: 'municipio',
       rules: [{ required: validated }],
       placeholder: 'Seleccione un municipio'
      }}
      optionDefault={{ title: '[Municipio]', value: '' }}
      options={[{ value: '0202', title: 'Santa Tecla' }]}
     />
     <SelectType
      column={{ span: 8 }}
      item={{
       label: 'Vive con',
       name: 'convivencia',
       rules: [{ required: validated }],
       placeholder: 'Seleccione un municipio'
      }}
      optionDefault={{ title: '[Vive con]', value: '' }}
      options={[{ value: '1', title: 'Padres de familia' }]}
     />
    </Row>
    <Row gutter={24}>
     <InputType
      column={{ span: 12 }}
      item={{
       label: 'Colonia o comunidad',
       name: 'colonia'
      }}
      input={{
       placeholder: 'Colonia o comunidad',
       allowClear: true
      }}
     />
     <InputType
      column={{ span: 12 }}
      item={{
       label: 'Calle o numero',
       name: 'calle'
      }}
      input={{
       placeholder: 'Calle o numero',
       allowClear: true
      }}
     />
    </Row>
    <Divider />
    <H2Title>Estudios</H2Title>

    <Input.Group>
     <Row>
      <InputType
       column={{ span: 13 }}
       item={{
        label: '',
        name: 'institucion',
        rules: [{ required: validated }]
       }}
       input={{
        placeholder: '* Nombre de la institucion',
        allowClear: true
       }}
      />
      <SelectType
       column={{ span: 4 }}
       item={{
        label: '',
        name: 'tipoInstitucion',
        rules: [{ required: validated }],
        placeholder: '* Tipo de institucion'
       }}
       options={[
        { title: 'Publica', value: 'Publica' },
        { title: 'Privada', value: 'Privada' }
       ]}
      />
      <SelectType
       column={{ span: 7 }}
       item={{
        label: '',
        name: 'titulo',
        rules: [{ required: validated }],
        placeholder: '* En la institución donde me gradué de'
       }}
       options={[{ title: 'Tecnico', value: 'Tecnico' }]}
      />
     </Row>
    </Input.Group>
    <Row>{/* TODO: Pendiente el formulario de precio */}</Row>
    <Row justify="start">
     <Button type="primary" htmlType="submit">
      Continuar
     </Button>
    </Row>
   </Form>
  </>
 )
}
