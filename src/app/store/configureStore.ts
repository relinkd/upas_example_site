import { configureStore } from '@reduxjs/toolkit';
import { MarketplaceState } from 'entities/marketplace/model';
import { PersistConfig, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { ignoredActions } from './ignoredSerializableActions';
import reducer from './rootReducer';
import rootSaga from './rootSaga';

type MyPersistConfig<T> = PersistConfig<T> & { whitelist: (keyof T)[] };

const sagaMiddleware = createSagaMiddleware();

const marketplacePersistConfig: MyPersistConfig<MarketplaceState> = {
  key: 'marketplace',
  storage,
  whitelist: [],
};
const reducers = {
  ...reducer,
  marketplace: persistReducer(marketplacePersistConfig, reducer.marketplace),
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
