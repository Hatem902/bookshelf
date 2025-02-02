import { useMemo } from 'react'

export function useSearch(books: Book[], search: string) {
  return useMemo(() => {
    return books.filter((book) =>
      Object.values(book).some((value) =>
        value.toString().toLowerCase().includes(search.toLowerCase()),
      ),
    )
  }, [books, search])
}
