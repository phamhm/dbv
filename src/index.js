import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import RootReducer from './root-reducer';
import registerServiceWorker from './registerServiceWorker';

import Dbv from './filereader-app/app';

const createStoreWithMiddleware =
      applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(RootReducer)}>
    <Dbv/>
  </Provider>
  , document.querySelector('#root'));
registerServiceWorker();
