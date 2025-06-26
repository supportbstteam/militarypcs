'use client'

import QueryHydrator from '@/components/QueryHydrator'
import { useFilterStore } from '@/store/filterStore'
import { FilterKey } from '../../../types/jqvmap'
// import type { FilterKey } from '@/types/FilterKey'

export default function QueryHydratorWrapper({ keys }: { keys: FilterKey[] }) {
  return (
    <QueryHydrator
      keys={keys}
      setFn={useFilterStore.getState().set}
    />
  )
}
