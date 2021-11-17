import { createAsyncThunk } from '@reduxjs/toolkit'

import Connection from 'src/api/Connetion'

export const searchCentroEscolar = createAsyncThunk(
  '@centro/search/codigo',
  async (query: string) => {
    return await Connection.getInstance().post('/centro/search', {
      q: query
    })
  }
)

export const initialDataCentroEscolar = createAsyncThunk(
  '@centro/initial/data',
  async () => {
    return await Connection.getInstance().post('/centro/new', {})
  }
)

export const mantenimientoSave = createAsyncThunk(
  '@centro/mantenimiento/save',
  async (data: any) => {
    await Connection.getInstance().post('/centro/save', { ...data })
  }
)
