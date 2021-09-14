import * as React from 'react'
import { Row, Switch, Space } from 'antd'

import { H1Title } from 'src/styles'
import { changeStatus } from 'src/redux/slicers/steps'
import { useAppDispatch, useAppSelector } from 'src/redux/hooks'

import { BienesImuebleContenedor } from './BienesInmuebles/BienInmuebleContenedor'

export const BienesImuebles = () => {
  const dispatch = useAppDispatch()
  const { poseeInmuebles } = useAppSelector((state) => state.steps)

  // change status posee
  const handlerChangeStatus = () => {
    dispatch(changeStatus())
  }

  return (
    <>
      <H1Title>Bienes Inmuebles</H1Title>
      <p>
        Los bienes inmuebles (casas, lotes, terrenos, fincas, etc.) que posee mi
        grupo familiar son los siguientes <b>(Incluir inmuebles financiados)</b>
      </p>
      <Row>
        <Space>
          <h3 style={{ marginBottom: 0 }}>
            Mi grupo familiar posee ningún bienes inmuebles
          </h3>
          <Switch
            size="default"
            checkedChildren="Si"
            unCheckedChildren="No"
            defaultChecked
            onChange={handlerChangeStatus}
          />
        </Space>
      </Row>
      {poseeInmuebles && <BienesImuebleContenedor />}
    </>
  )
}
