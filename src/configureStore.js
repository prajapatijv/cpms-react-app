import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import createSagaMiddleware  from "redux-saga";
import rootSaga from './containers/root-sagas'

import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import rootReducer from './containers/combined-reducers'

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [loggerMiddleware, thunkMiddleware, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore;
