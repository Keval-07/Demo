// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer, {RootState} from './store';
// import {Action, configureStore} from '@reduxjs/toolkit';
// import thunk, {ThunkAction} from 'redux-thunk';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   blacklist: [],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: [thunk],
// });

// export type AppDispatch = typeof store.dispatch;
// export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

// const persistor = persistStore(store);

// if (!store) {
//   throw new Error("Store initialization failed");
// }
// export { store, persistor };

