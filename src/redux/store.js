import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import campersReducer from "./campers/slice.js";
import filtersReducer from "./filters/slice.js";

const campersPersistConfig = {
  key: "camperValue",
  storage,
  whitelist: ["campers"],
};

const pCampersReducer = persistReducer(campersPersistConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: pCampersReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
