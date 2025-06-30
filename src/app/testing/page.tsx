'use client'

import FilterCookieLogger from '@/components/debug/FilterCookieLogger'
import { useFilterStore } from '@/store/filterStore'
import { useEffect } from 'react'

export default function StoreDisplay() {
  // ✅ Reactively read values from store
  // const state = useFilterStore((s) => s.state)
  // const city = useFilterStore((s) => s.city)
  // const directory = useFilterStore((s) => s.directory)
  // const subDirectory = useFilterStore((s) => s.subDirectory)

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50 text-left">
      <h3 className="text-lg font-semibold mb-2">Selected Filters</h3>
      {/* <ul className="space-y-1 text-sm text-gray-700">
        <li><strong>State:</strong> {state || '—'}</li>
        <li><strong>City:</strong> {city || '—'}</li>
        <li><strong>Directory:</strong> {directory || '—'}</li>
        <li><strong>SubDirectory:</strong> {subDirectory || '—'}</li>
      </ul> */}
      <FilterCookieLogger/>
    </div>
  )
}
