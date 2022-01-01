import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { Reducer } from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import { RESET_STATE_ACTION_TYPE } from './Global/reset';
import { unauthenticatedMiddleware } from './Global/unauthenticatedMiddleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  tireModelApi,
  TIRE_MODEL_API_REDUCER_KEY,
} from '../services/tireModel';
import { tireApi, TIRE_API_REDUCER_KEY } from '../services/tireApi';
import { tireBrandApi } from '../services/tireBrand';

const reducers = {
  [tireModelApi.reducerPath]: tireModelApi.reducer,
  [tireBrandApi.reducerPath]: tireBrandApi.reducer,
  [tireApi.reducerPath]: tireApi.reducer,
};

const combinedReducer = combineReducers<typeof reducers>(reducers);

export const rootReducer: Reducer<RootState> = (state, action) => {
  if (action.type === RESET_STATE_ACTION_TYPE) {
    state = {} as RootState;
  }

  return combinedReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducer);

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      unauthenticatedMiddleware,
      tireApi.middleware,
      tireModelApi.middleware,
      tireBrandApi.middleware
    ),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch); // NOTE this addition

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
