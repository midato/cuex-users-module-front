import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/*const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose*/
const composeEnhancers = composeWithDevTools({
  name: 'Redux',
  realtime: true,
  trace: true,
  traceLimit: 20
})
export default createStore(RootReducer, composeEnhancers(applyMiddleware(thunk)))

