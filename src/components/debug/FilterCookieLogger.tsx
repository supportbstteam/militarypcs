'use client'

import { useEffect, useState } from 'react'

export default function FilterCookieLogger() {
  const [cookieData, setCookieData] = useState<Record<string, string>>({})

  useEffect(() => {
    if (typeof document === 'undefined') return

    const cookieMap: Record<string, string> = {}
    const cookies = document.cookie.split(';')

    cookies.forEach((cookie) => {
      const [rawKey, rawValue] = cookie.split('=')
      const key = rawKey?.trim()
      const value = decodeURIComponent(rawValue || '')
      cookieMap[key] = value
    })

    const keys = [
      'state',
      'stateId',
      'city',
      'cityId',
      'directory',
      'directoryId',
      'subDirectory',
      'subDirectoryId',
    ]

    const filtered: Record<string, string> = {}
    keys.forEach((key) => {
      filtered[key] = cookieMap[key] || '—'
    })

    setCookieData(filtered)
  }, [])

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h3 className="font-semibold mb-2">Filter Cookie Values</h3>
      <ul className="text-sm text-gray-700 space-y-1">
        {Object.entries(cookieData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  )
}
