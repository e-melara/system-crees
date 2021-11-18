import { createAsyncThunk } from '@reduxjs/toolkit'

import Connection from 'src/api/Connetion'

export const startChecking = createAsyncThunk(
  '@auth/checking',
  async () => {
    return await Connection.getInstance().get('/auth/me')
  }
)

export const login = createAsyncThunk(
  '@auth/login',
  async (data: { username: string; password: string }) => {
    return await Connection.getInstance().login(data.username, data.password)
  }
)
