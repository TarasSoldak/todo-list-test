import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducers/todoSlice'
import geoReducer from './reducers/geolocationSlice'
import wheatherReducer from './reducers/weatherSlice'
import catFactReducer from './reducers/catFactSlice'
import dogImgReducer from './reducers/dogRandomImgSlice'
import loginReducer from './reducers/loginSlice'
import { 
  persistStore, 
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  todo: todoReducer,
  geo:geoReducer,
  wheather:wheatherReducer,
  catFact:catFactReducer,
  dogImg:dogImgReducer,
  login:loginReducer

})

const persistConfig = {
  key: 'root',
  storage,
  blacklist:['geo','wheather','catFact','dogImg']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
   
})
export const persistor =persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch