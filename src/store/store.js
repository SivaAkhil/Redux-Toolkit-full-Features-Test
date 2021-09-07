import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import CounterReducer from "./counter";
import fakeRestApi from "./api";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
    [fakeRestApi.reducerPath]: fakeRestApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(fakeRestApi.middleware),
});

setupListeners(store.dispatch);

export default store;
