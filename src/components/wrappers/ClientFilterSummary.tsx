'use client'

import { useFilterStore } from '@/store/filterStore'

export default function ClientFilterSummary() {
  // ✅ Reactively read values from store
  const state = useFilterStore((s) => s.state)
  const stateId = useFilterStore((s) => s.stateId)
  const city = useFilterStore((s) => s.city)
  const directory = useFilterStore((s) => s.directory)
  const subDirectory = useFilterStore((s) => s.subDirectory)

  return (
    <div className="mt-6 p-4s rounded text-left">
      <ul className="space-y-1 text-sm text-gray-700">
        <li><strong>State:</strong> {state || '—'}</li>
        <li><strong>StateId:</strong> {stateId || '—'}</li>
        <li><strong>City:</strong> {city || '—'}</li>
        <li><strong>Directory:</strong> {directory || '—'}</li>
        <li><strong>SubDirectory:</strong> {subDirectory || '—'}</li>
      </ul>
    </div>
  )
}
