import { createSlice } from '@reduxjs/toolkit'

import { UIState } from './interfaces'

const initialState: UIState = {
  collapse: false
}

const uiSlicer = createSlice({
  name: '@ui',
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.collapse = !state.collapse
    }
  }
})

export const { toggleSidebar } = uiSlicer.actions
export default uiSlicer.reducer
