import { v4 } from 'uuid'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { BieneInmueble, Familiar, StepsState } from './iterfaces'

const initialState: StepsState = {
  current: 0,
  poseeInmuebles: true,
  estado: 'process',
  items: [
    {
      title: 'Step 01',
      description: 'Basic Details'
    },
    {
      title: 'Step 02',
      description: 'Datos Familiares'
    },
    {
      title: 'Step 03',
      description: 'Bienes Inmuebles'
    }
  ],
  familiares: [] as Familiar[],
  bienesInmuebles: [] as BieneInmueble[]
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
    },

    // familiares
    add(state, action: PayloadAction<Familiar>) {
      let { payload } = action
      payload.id = v4()
      state.familiares.push(payload)
    },

    // bienes inmuebles
    addBienInmueble(state, action: PayloadAction<BieneInmueble>) {
      const { payload } = action
      payload.id = v4()
      state.bienesInmuebles.push(payload)
    },
    changeStatus(state) {
      state.poseeInmuebles = !state.poseeInmuebles
    }
  }
})

export default stepsSlicer.reducer
export const { next, prev, errorStatus, add, addBienInmueble, changeStatus } =
  stepsSlicer.actions
