import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import user from './user-reducer'
import "antd/dist/antd.css";
const reducers = {
  user,
}

export const resetEnhancer = (rootReducer) => (state, action) => {
    return rootReducer(state, action)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (history) => combineReducers({router: connectRouter(history), ...reducers})
