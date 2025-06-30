import { create } from 'zustand'

type FilterState = {
  state: string
  stateId: string
  city: string
  cityId: string
  directory: string
  directoryId: string
  subDirectory: string
  subDirectoryId: string
  set: (key: keyof Omit<FilterState, 'set' | 'reset'>, value: string) => void
  reset: () => void
}

function setCookie(key: string, value: string) {
  if (typeof window !== 'undefined') {
    document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=86400`
  }
}

export const useFilterStore = create<FilterState>((set) => ({
  state: '',
  stateId: '',
  city: '',
  cityId:'',
  directory: '',
  directoryId: '',
  subDirectory: '',
  subDirectoryId: '',
  set: (key, value) => {
    set((prev) => ({ ...prev, [key]: value }))
    setCookie(key, value)
  },
  reset: () =>
    set({
      state: '',
      stateId: '',
      city: '',
      cityId: '',
      directory: '',
      directoryId: '',
      subDirectory: '',
      subDirectoryId: '',
    }),
}))
