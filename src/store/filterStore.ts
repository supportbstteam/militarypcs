// src/store/filterStore.ts
import { create } from 'zustand'

type FilterState = {
  state: string
  city: string
  directory: string
  subDirectory: string
  set: (key: keyof Omit<FilterState, 'set' | 'reset'>, value: string) => void
  reset: () => void
}

export const useFilterStore = create<FilterState>((set) => ({
  state: '',
  city: '',
  directory: '',
  subDirectory: '',
  set: (key, value) => set((prev) => ({ ...prev, [key]: value })),
  reset: () =>
    set({
      state: '',
      city: '',
      directory: '',
      subDirectory: '',
    }),
}))
