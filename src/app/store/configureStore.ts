import { configureStore } from '@reduxjs/toolkit';
import { UserState } from 'entities/user/model';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { ignoredActions } from './ignoredSerializableActions';
import reducer from './rootReducer';
import rootSaga from './rootSaga';

type MyPersistConfig<T> = PersistConfig<T> & { whitelist: (keyof T)[] };

const sagaMiddleware = createSagaMiddleware();

const userPersistConfig: MyPersistConfig<UserState> = {
  key: 'user',
  storage,
  whitelist: [],
};
const reducers = {
  ...reducer,
  user: persistReducer(userPersistConfig, reducer.user),
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: { ignoredActions },
    }).concat(sagaMiddleware),
});

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
