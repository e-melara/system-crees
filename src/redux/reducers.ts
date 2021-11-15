import { combineReducers } from 'redux'

import reducersStpes from './slicers/steps'
import reducerCentoEscolar from './slicers/centro-escolar'

const reducers = combineReducers({
  steps: reducersStpes,
  centro: reducerCentoEscolar
})

export default reducers
