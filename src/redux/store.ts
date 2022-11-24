import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Player } from "./features/PlayerSlice";
import { ShazamCoreApi } from "./services/shazamCore";

export const store = configureStore({
  reducer: {
    player: Player.reducer,
    [ShazamCoreApi.reducerPath]: ShazamCoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShazamCoreApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
