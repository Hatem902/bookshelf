'use client'

import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Star, Pencil } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface EditableCellProps {
  value: string | number
  onUpdate: (value: string | number) => void
  options?: (string | number)[]
}

export function EditableCell({ value, onUpdate, options }: EditableCellProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  const renderRatingStars = (rating: number) => {
    return (
      <div className='flex items-center gap-0.5'>
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star <= rating ? 'fill-primary text-primary' : 'fill-muted text-muted-foreground'}`}
          />
        ))}
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'read':
        return 'bg-green-500/20 text-green-500 hover:bg-green-500/30'
      case 'reading':
        return 'bg-blue-500/20 text-blue-500 hover:bg-blue-500/30'
      case 'unread':
        return 'bg-gray-500/20 text-gray-500 hover:bg-gray-500/30'
      default:
        return 'bg-muted'
    }
  }

  if (options) {
    return (
      <Select
        value={value.toString()}
        onValueChange={(value) => onUpdate(value)}
      >
        <SelectTrigger
          className={`h-8 w-[130px] ${typeof value === 'string' ? getStatusColor(value) : ''}`}
        >
          <SelectValue>
            {typeof value === 'number'
              ? renderRatingStars(value as number)
              : value}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option.toString()}>
              {typeof option === 'number'
                ? renderRatingStars(option as number)
                : option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    )
  }

  const handleBlur = () => {
    setIsEditing(false)
    if (currentValue !== value) {
      onUpdate(currentValue)
    }
  }

  return isEditing ? (
    <Input
      value={currentValue}
      onChange={(e) => setCurrentValue(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleBlur()
        }
      }}
      className='h-8 w-[130px]'
      autoFocus
    />
  ) : (
    <div
      className='group flex cursor-pointer items-center gap-2'
      onClick={() => setIsEditing(true)}
    >
      <span className='flex-1 truncate'>{value}</span>
      <Pencil className='h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100' />
    </div>
  )
}
