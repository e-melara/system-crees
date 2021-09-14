import { combineReducers } from "redux";

import reducersStpes from "./slicers/steps";

const reducers = combineReducers({
  steps: reducersStpes,
});

export default reducers;
