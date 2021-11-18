import * as React from 'react'
import { Col } from 'antd'

import { Loading } from 'src/components/Loading/Loading'
import { FormNuevaReparacion } from './Nueva/FormNuevaReparacion'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { initialDataCentroEscolar } from '../../redux/slicers/thunk/centro'

export function NuevaReparacion() {
  const dispatch = useAppDispatch()
  const { loading, data } = useAppSelector((state) => state.centro)

  React.useEffect(() => {
    if (!data.loading) {
      dispatch(initialDataCentroEscolar())
    }
  }, [data.loading, dispatch])

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="containter-fluid">
            <Col span={24}>
              <FormNuevaReparacion />
            </Col>
          </div>
        </>
      )}
    </>
  )
}
