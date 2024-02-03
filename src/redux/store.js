import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { advertsReducer } from './adverts/slice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import { favoritesReducer } from './favorites/slice';

const persistConfig = {
  key: 'favorites',
  storage,
};

const combinedReducers = combineReducers({
  // adverts: persistReducer(persistConfig, advertsReducer),
  adverts: advertsReducer,
  favorites: persistReducer(persistConfig, favoritesReducer),
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
