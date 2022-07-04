import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import themeSliceReducer from './themeSlice'
import { enableMapSet } from 'immer'
import ethSliceReducer from './ethSlice'

export const store = configureStore({
  reducer: {
    theme: themeSliceReducer,
    eth: ethSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)
enableMapSet()
