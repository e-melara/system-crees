import { createSlice } from '@reduxjs/toolkit'

import { StepsState } from './interfaces'

const initialState: StepsState = {
  current: 0,
  estado: 'process',
  items: [
    {
      title: 'Paso 1',
      description: 'Centro Escolar'
    },
    {
      title: 'Paso 2',
      description: 'Equipos'
    },
    {
      title: 'Paso 3',
      description: 'Procedencia'
    },
    {
      title: 'Paso 4',
      description: 'Detalles'
    }
  ]
}

const stepsSlicer = createSlice({
  name: '@steps',
  initialState,
  reducers: {
    // ui
    next(state) {
      state.current++
      state.estado = 'process'
    },
    prev(state) {
      state.current--
      state.estado = 'process'
    },
    errorStatus(state) {
      state.estado = 'error'
    }
  }
})

export default stepsSlicer.reducer
export const { next, prev, errorStatus } = stepsSlicer.actions
