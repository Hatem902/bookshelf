import { useState, useMemo } from 'react'

type SortConfig = {
  key: keyof Book
  direction: 'ascending' | 'descending'
}

export function useSort(items: Book[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: 'title',
    direction: 'ascending',
  })

  const sortedItems = useMemo(() => {
    const sortableItems = [...items]
    if (sortConfig.key) {
      sortableItems.sort((a, b) => {
        const aValue = a[sortConfig.key]
        const bValue = b[sortConfig.key]

        if (aValue !== undefined && bValue !== undefined) {
          if (aValue < bValue) {
            return sortConfig.direction === 'ascending' ? -1 : 1
          }
          if (aValue > bValue) {
            return sortConfig.direction === 'ascending' ? 1 : -1
          }
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key: keyof Book) => {
    let direction: 'ascending' | 'descending' = 'ascending'
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { sortedItems, sortConfig, requestSort }
}
