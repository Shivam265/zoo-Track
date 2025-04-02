// store.js
import { configureStore } from "@reduxjs/toolkit";
import animalReducer from "./animalSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Redux Persist configuration.
const persistConfig = {
  key: "root",
  storage,
};

// Wrap our animalReducer with persistReducer.
const persistedReducer = persistReducer(persistConfig, animalReducer);

// Create the store with our persisted reducer.
export const store = configureStore({
  reducer: {
    animals: persistedReducer,
  },
});

// Create a persistor linked to our store.
export const persistor = persistStore(store);
