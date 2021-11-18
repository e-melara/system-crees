import { combineReducers } from 'redux'

import reducerUI from './slicers/ui'
import reducerAuth from './slicers/auth'
import reducersStpes from './slicers/steps'
import reducerCentoEscolar from './slicers/centro-escolar'

const reducers = combineReducers({
  ui: reducerUI,
  auth: reducerAuth,
  steps: reducersStpes,
  centro: reducerCentoEscolar
})

export default reducers
