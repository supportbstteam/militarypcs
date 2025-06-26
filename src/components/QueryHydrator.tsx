'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

type QueryHydratorProps<T extends Record<string, any>> = {
  keys: (keyof T)[]
  setFn: (key: keyof T, value: string) => void
}

export default function QueryHydrator<T extends Record<string, any>>({
  keys,
  setFn,
}: QueryHydratorProps<T>) {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (!searchParams || !keys?.length) return

    keys.forEach((key) => {
      const value = searchParams.get(String(key))
      if (value !== null) {
        setFn(key, value)
      }
    })
  }, [searchParams, keys, setFn])

  return null
}
