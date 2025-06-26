// components/ZustandDevTools.tsx
'use client'

import { useEffect, useState } from 'react'
import { useFilterStore } from '@/store/filterStore'

export default function ZustandDevTools() {
  const [storeSnapshot, setSnapshot] = useState(useFilterStore.getState())

  useEffect(() => {
    const unsubscribe = useFilterStore.subscribe((state) => {
      setSnapshot({ ...state }) // shallow copy to trigger re-render
    })
    return () => unsubscribe()
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 10,
        right: 10,
        padding: '1rem',
        background: '#111',
        color: '#0f0',
        fontSize: '12px',
        zIndex: 9999,
        maxWidth: '300px',
        overflow: 'auto',
        borderRadius: '0.5rem',
        boxShadow: '0 0 5px rgba(0,0,0,0.4)',
        fontFamily: 'monospace',
      }}
    >
      <strong>Zustand Store:</strong>
      <pre style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(storeSnapshot, null, 2)}
      </pre>
    </div>
  )
}
