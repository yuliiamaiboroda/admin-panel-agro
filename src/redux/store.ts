import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { userReducer } from './user';
import { productsReducer } from './products';
import { usersReducer } from './users';
import { servicesReducer } from './services';
import { vacanciesReducer } from './vacancies';
import { feedbacksReducer } from './feedbacks';

const persistConfig = {
  key: 'credentials',
  storage,
  whitelist: ['accessToken'],
};

const credentialsPersistReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    userData: credentialsPersistReducer,
    products: productsReducer,
    usersList: usersReducer,
    services: servicesReducer,
    vacancies: vacanciesReducer,
    feedbacks: feedbacksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
