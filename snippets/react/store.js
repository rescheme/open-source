/**
|===============================================================================
| Redux Store
|===============================================================================
|
| @author Randell Tuazon <randell.tuazon@rescheme.com>
|
*/

// Create final store using all reducers and applying middleware
import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import throttle from 'lodash/throttle';

// Reducers required
import createReducer from './reducers';

// Services required: Redux utility functions
import {
  saveState,
  loadState,
  // clearLocalStorage,
  actionStorageMiddleware,
  createStorageListener
} from './resources/helpers';

import {
  loginWithToken,
  // login,
  // logout
} from './actions/auth.actions';

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = process.env.NODE_ENV !== 'production'
  && typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
/* eslint-enable */

// Configure reducer to store state at state.router
// You can store it elsewhere by specifying a custom `routerStateSelector`
// in the store enhancer below
export const history = createBrowserHistory();

// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history), thunk, actionStorageMiddleware];

let preloadedState = loadState();

if (
  typeof preloadedState !== 'undefined'
  && typeof preloadedState.router !== 'undefined'
) {
  delete preloadedState.router;
}

export const store = createStore(
  createReducer(history),
  preloadedState, // preloadedState, initialState
  composeEnhancers(
    applyMiddleware(...middlewares),
    // Provides support for DevTools via Chrome extension
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// Create a listener on store to dispatch the latest action being triggered on other tabs.
createStorageListener(store);

// Extensions
store.runSaga = sagaMiddleware.run;
store.injectedReducers = {}; // Reducer registry
store.injectedSagas = {}; // Saga registry

// Save only store state you need to persist
// let saveStoreState = {
//     auth: store.getState().auth
// }

store.subscribe(throttle(() => saveState(store.getState()), 500));
store.dispatch(loginWithToken());

// store.dispatch(login({ email: 'randelltuazon@gmail.com', password: 'password' }));
// store.dispatch(logout());
// clearLocalStorage();

// Make reducers hot reloadable, see http://mxs.is/googmo
/* istanbul ignore next */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(createReducer(store.injectedReducers));
  });
}
