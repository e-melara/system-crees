import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { AuthState } from './interfaces'
import { startChecking, login } from './thunk/auth'

const initialState: AuthState = {
  checking: false,
  loading: false,
  isAuthenticated: false
}

const AuthSlicer = createSlice({
  name: '@auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(startChecking.fulfilled, (state, action: PayloadAction<any>) => {
        const {
          data: { nombres, apellidos, username, user },
          token
        } = action.payload

        state.checking = true
        state.isAuthenticated = true
        state.auth = {
          user,
          nombres,
          apellidos,
          username,
          token
        }
      })
      .addCase(startChecking.rejected, (state) => {
        state.checking = true
        state.isAuthenticated = false
      })
      .addCase(login.pending, (state) => {
        state.loading = true
      })
      .addCase(login.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
        const {
          data: { nombres, apellidos, username, user },
          token
        } = action.payload

        state.checking = true
        state.loading = false
        state.isAuthenticated = true
        state.auth = {
          user,
          nombres,
          apellidos,
          username,
          token
        }
      })
  }
})

// export const {} = AuthSlicer.actions
export default AuthSlicer.reducer
