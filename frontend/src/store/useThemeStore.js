// src/store/useThemeStore.js
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'light', // default theme
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    document.documentElement.setAttribute('data-theme', newTheme);
  },
}));
