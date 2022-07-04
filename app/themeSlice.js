import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'

      // On page load or when changing themes, best to add inline in `head` to avoid FOUC
      if (state.mode === 'dark') {
        document?.documentElement.classList.add('dark')
      } else {
        document?.documentElement.classList.remove('dark')
      }
    },
  },
})

export const { toggleTheme } = themeSlice.actions

export default themeSlice.reducer
