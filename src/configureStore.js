import { applyMiddleware, compose, createStore } from 'redux'

import createSagaMiddleware  from "redux-saga";
import rootSaga from './containers/root-sagas'

import monitorReducersEnhancer from './enhancers/monitorReducer'
import loggerMiddleware from './middleware/logger'
import rootReducer from './containers/combined-reducers'
import { Config, Env } from './AppConfig'

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = (Config.ENV === Env.Production) ? 
    [sagaMiddleware] :
    [loggerMiddleware, sagaMiddleware]
   
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = (Config.ENV === Env.Production) ?
    [middlewareEnhancer] :
    [middlewareEnhancer, monitorReducersEnhancer]

  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(rootSaga)

  return store
}

export default configureStore;
