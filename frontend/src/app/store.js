import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers'

export const store = configureStore({
  reducer: {
    user:userReducer
  },
});

// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// // import UserSlice from "./slices/UserSlice";

// const rootReducer = combineReducers({
//   user: userReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage, // browser local storage by default value
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

// export default store;