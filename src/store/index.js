import createSagaMiddleware from 'redux-saga';
import loggerMiddleware from 'redux-logger';
import config from '../config';

import reject from 'lodash/reject';
import isNil from 'lodash/isNil';
import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux';
import saga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = (getDefaultMiddleware) => {
  const customMiddlewares = reject([sagaMiddleware, config.env === 'development' ? loggerMiddleware : null], isNil);
  return getDefaultMiddleware().concat(customMiddlewares);
};

const store = configureStore({
  middleware,
  reducer,
});

store.sagaTask = sagaMiddleware.run(saga);

export default store;
