import { message } from 'antd'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { searchCentroEscolar, initialDataCentroEscolar } from './thunk/centro'
import {
  Equipo,
  Procedencia,
  CentroState,
  ResponseConnection,
  CentroEscolarInterface
} from './interfaces'

const initialState: CentroState = {
  equipos: [],
  isNew: false,
  search: false,
  loading: true,
  centro: {} as CentroEscolarInterface,
  data: {
    tipo: [],
    marcas: [],
    personas: [],
    loading: false
  },
  procedencia: {
    observacion: ''
  }
}

// slicer
const CentroEscolarSlicer = createSlice({
  name: '@centroescolar',
  initialState,
  reducers: {
    addEquipo(state, action: PayloadAction<Equipo>) {
      state.equipos.push(action.payload)
    },
    removeEquipo(state, action: PayloadAction<string>) {
      state.equipos = state.equipos.filter((e) => e.key !== action.payload)
    },
    addProcedencia(state, action: PayloadAction<Procedencia>) {
      const { payload } = action
      state.procedencia = {
        observacion: payload.observacion,
        studentOrTeacher: {
          documento: payload.studentOrTeacher?.documento || '',
          nombresCompleto: payload.studentOrTeacher?.nombresCompleto || '',
          type: payload.studentOrTeacher?.type || 3
        },
        firmaCEDE: payload.firmaCEDE
      }

      if (payload.directorOrPersona?.type === 1) {
        state.procedencia.directorOrPersona = {
          type: 1,
          documento: state.centro.dirDUI,
          phone: payload.directorOrPersona?.phone,
          nombresCompleto: `${state.centro.dirNombres} ${state.centro.dirApellidos}`
        }
      } else {
        state.procedencia.directorOrPersona = {
          type: 2,
          phone: payload.directorOrPersona?.phone,
          documento: payload.directorOrPersona?.documento || '',
          nombresCompleto: payload.directorOrPersona?.nombresCompleto || ''
        }
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initialDataCentroEscolar.pending, function (state) {
        state.loading = true
      })
      .addCase(
        initialDataCentroEscolar.fulfilled,
        function (state, action: PayloadAction<ResponseConnection>) {
          const { payload } = action
          state.loading = false
          state.data = {
            loading: true,
            tipo: payload.data['tipo'],
            marcas: payload.data['marcas'],
            personas: payload.data['personas']
          }
        }
      )
      .addCase(searchCentroEscolar.pending, (state) => {
        state.loading = true
        state.isNew = false
        state.search = false
      })
      .addCase(
        searchCentroEscolar.fulfilled,
        function (state, action: PayloadAction<ResponseConnection>) {
          const { payload } = action
          if (payload.ok) {
            state.search = true
            state.centro = {
              codigo: payload.data.codigo,
              nombre: payload.data.nombre,
              dirDUI: payload.data.dir_dui,
              dirNombres: payload.data.dir_nombres,
              dirApellidos: payload.data.dir_apellidos,
              municipio: payload.data.municipio.nombre
            }
          } else {
            state.isNew = true
            message.error(payload.message)
          }
          state.loading = false
        }
      )
  }
})

export const { addEquipo, removeEquipo, addProcedencia } =
  CentroEscolarSlicer.actions
export default CentroEscolarSlicer.reducer
