'use client'

import { useEffect } from 'react'
import { useFilterStore } from '@/store/filterStore'

declare global {
  interface Window {
    useFilterStore: typeof useFilterStore
  }
}

export default function DebugExposeStore() {
  useEffect(() => {
    // Expose the Zustand store for debugging
    window.useFilterStore = useFilterStore
    console.log('✅ Zustand store exposed on window.useFilterStore')
  }, [])

  return null
}
