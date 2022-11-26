import { configureStore } from "@reduxjs/toolkit";
import { Player } from "./features/PlayerSlice";
import { ShazamCoreApi } from "./services/shazamCore";
import { createWrapper } from "next-redux-wrapper";
export const makeStore = () =>
  configureStore({
    reducer: {
      player: Player.reducer,
      [ShazamCoreApi.reducerPath]: ShazamCoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(ShazamCoreApi.middleware),
  });
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
