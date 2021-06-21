import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {createBrowserHistory} from 'history'
import {routerMiddleware} from 'connected-react-router'
import createRootReducer, {resetEnhancer} from '../reducers'

const history = createBrowserHistory()
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const configureStore = (initialState) => {
  const store = createStore(
    resetEnhancer(createRootReducer(history)),
    initialState,
    enhancer(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
      ),
    ),
  )

    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(createRootReducer(history))
      })
    }
  return store
}

const store = configureStore()
export default store
