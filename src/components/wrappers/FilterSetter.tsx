'use client'

import { useEffect } from 'react'
import { useFilterStore } from '@/store/filterStore'

type Props = {
  state?: string
  stateId?: string
  city?: string
  cityId?: string
  directory?: string
  directoryId?: string
  subDirectory?: string
  subDirectoryId?: string
}

export default function FilterSetter({ state, stateId, city, cityId, directory, directoryId, subDirectory, subDirectoryId }: Props) {
  const set = useFilterStore.getState().set

  useEffect(() => {
    if (state) set('state', state)
    if (stateId) set('stateId', stateId)
    if (city) set('city', city)
    if (cityId) set('cityId', cityId)
    if (directory) set('directory', directory)
    if (directoryId) set('directoryId', directoryId)
    if (subDirectory) set('subDirectory', subDirectory)
    if (subDirectoryId) set('subDirectoryId', subDirectoryId)
  }, [state, stateId, city, cityId, directory, directoryId,subDirectory,subDirectoryId, set])

  return null
}
