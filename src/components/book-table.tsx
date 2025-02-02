'use client'

import { useState, useReducer, useMemo } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { BookActions } from './book-action'
import { EditableCell } from './ui/editable-cell'
import { useSort } from '../hooks/useSort'
import { useSearch } from '../hooks/useSearch'
import { ArrowUpDown } from 'lucide-react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type Action =
  | { type: 'SELECT_ALL'; payload: boolean }
  | { type: 'SELECT'; payload: { id: number; selected: boolean } }
  | { type: 'UPDATE_BOOK'; payload: Book }
  | { type: 'SET_BOOKS'; payload: Book[] }

const reducer = (state: Book[], action: Action): Book[] => {
  switch (action.type) {
    case 'SELECT_ALL':
      return state.map((book) => ({ ...book, selected: action.payload }))
    case 'SELECT':
      return state.map((book) =>
        book.id === action.payload.id
          ? { ...book, selected: action.payload.selected }
          : book,
      )
    case 'UPDATE_BOOK':
      return state.map((book) =>
        book.id === action.payload.id ? { ...book, ...action.payload } : book,
      )
    case 'SET_BOOKS':
      return action.payload
    default:
      return state
  }
}

export function BookTable({ collection }: { collection: Collection }) {
  const [books, dispatch] = useReducer(reducer, collection.books)
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10
  const { sortedItems, requestSort } = useSort(books)
  const searchedBooks = useSearch(sortedItems, search)

  const selectedBooks = useMemo(
    () => books.filter((book) => book.selected),
    [books],
  )

  const handleSelectAll = (checked: boolean) => {
    dispatch({ type: 'SELECT_ALL', payload: checked })
  }

  const handleSelect = (id: number, checked: boolean) => {
    dispatch({ type: 'SELECT', payload: { id, selected: checked } })
  }

  const handleUpdateBook = (updatedBook: Book) => {
    dispatch({ type: 'UPDATE_BOOK', payload: updatedBook })
  }

  const handleDelete = () => {
    const updatedBooks = books.filter((book) => !book.selected)
    dispatch({ type: 'SET_BOOKS', payload: updatedBooks })
  }

  // Calculate pagination
  const totalPages = Math.ceil(searchedBooks.length / itemsPerPage)
  const paginatedBooks = searchedBooks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <div className='space-y-4'>
      <div className='flex items-center justify-between'>
        <div className='flex max-w-sm flex-1 items-center gap-2'>
          <Input
            placeholder='Filter books...'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='h-8 w-full bg-background'
          />
        </div>
        <BookActions
          selectedBooks={selectedBooks}
          onUpdate={handleUpdateBook}
          onDelete={handleDelete}
        />
      </div>
      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[50px]'>
                <Checkbox
                  checked={books.every((book) => book.selected)}
                  onCheckedChange={handleSelectAll}
                />
              </TableHead>
              <TableHead>
                <div className='flex items-center space-x-2'>
                  <span>Title</span>
                  <Button
                    className='px-1.5'
                    variant='ghost'
                    onClick={() => requestSort('title')}
                  >
                    <ArrowUpDown className='h-4 w-4' />
                  </Button>
                </div>
              </TableHead>
              <TableHead>
                <div className='flex items-center space-x-2'>
                  <span>Year</span>
                  <Button
                    className='px-1.5'
                    variant='ghost'
                    onClick={() => requestSort('publication_year')}
                  >
                    <ArrowUpDown className='h-4 w-4' />
                  </Button>
                </div>
              </TableHead>

              <TableHead>
                <div className='flex items-center space-x-2'>
                  <span>Publisher</span>
                  <Button
                    className='px-1.5'
                    variant='ghost'
                    onClick={() => requestSort('publisher')}
                  >
                    <ArrowUpDown className='h-4 w-4' />
                  </Button>
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedBooks.map((book) => (
              <TableRow key={book.id}>
                <TableCell className='w-[50px]'>
                  <Checkbox
                    checked={book.selected}
                    onCheckedChange={(checked) =>
                      handleSelect(book.id, checked as boolean)
                    }
                  />
                </TableCell>
                <TableCell>
                  <div className='flex w-[250] flex-col'>
                    <span className='truncate font-medium'>{book.title}</span>
                    {book.subtitle && (
                      <span className='truncate text-sm text-muted-foreground'>
                        {book.subtitle}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className='w-[250]'>
                  <span className='truncate'>{book.publication_year}</span>
                </TableCell>
                <TableCell className='w-[250]'>
                  <span className='truncate'>{book.publisher}</span>
                </TableCell>
                <TableCell className='w-[250]'>
                  <EditableCell
                    value={book.status}
                    onUpdate={(value) =>
                      handleUpdateBook({
                        ...book,
                        status: value as 'read' | 'unread' | 'reading',
                      })
                    }
                    options={['read', 'unread', 'reading']}
                  />
                </TableCell>
                <TableCell className='w-[250]'>
                  <EditableCell
                    value={book.rating}
                    onUpdate={(value) =>
                      handleUpdateBook({
                        ...book,
                        rating: Number(value) as 0 | 1 | 2 | 3 | 4 | 5,
                      })
                    }
                    options={[0, 1, 2, 3, 4, 5]}
                  />
                </TableCell>
                <TableCell className='w-[120]'>
                  <EditableCell
                    value={book.location}
                    onUpdate={(value) =>
                      handleUpdateBook({ ...book, location: value as string })
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-between pl-2'>
        <div className='text-sm text-muted-foreground'>
          {selectedBooks.length} of {searchedBooks.length} row(s) selected.
        </div>
        <div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  )
}
