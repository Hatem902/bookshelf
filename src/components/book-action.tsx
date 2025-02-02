'use client'

import { Button } from '@/components/ui/button'
import { Check, Trash2 } from 'lucide-react'

interface BookActionsProps {
  selectedBooks: Book[]
  onUpdate: (book: Book) => void
  onDelete?: () => void
}

export function BookActions({
  selectedBooks,
  onUpdate,
  onDelete,
}: BookActionsProps) {
  const handleMarkAsRead = () => {
    selectedBooks.forEach((book) => {
      onUpdate({ ...book, status: 'read' })
    })
  }

  return (
    <div className='flex items-center gap-2'>
      <Button
        size='sm'
        variant='outline'
        onClick={handleMarkAsRead}
        disabled={selectedBooks.length === 0}
      >
        <Check className='mr-2 h-4 w-4' />
        Mark as Read
      </Button>
      <Button
        size='sm'
        variant='outline'
        onClick={onDelete}
        disabled={selectedBooks.length === 0}
        className='text-destructive hover:bg-destructive hover:text-destructive-foreground'
      >
        <Trash2 className='mr-2 h-4 w-4' />
        Delete Selected
      </Button>
    </div>
  )
}
