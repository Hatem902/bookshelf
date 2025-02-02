'use client'
import React from 'react'
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { collections } from '@/mock-data/collections'
import { Card } from './ui/card'
import Link from 'next/link'
import { Library } from 'lucide-react'
import { useParams } from 'next/navigation'

type CollectionItem = {
  id: number
  name: string
}

type CollectionGroup = {
  name: string
  collectionList: CollectionItem[]
}

const collectionGroups: CollectionGroup[] = [
  {
    name: 'Your book collections',
    collectionList: collections.map(({ name, id }) => ({ name, id })),
  },
]

export const CollectionCommand = () => {
  const params = useParams<{ id: string }>()
  const SelectedCollectionId = Number(params.id)

  return (
    <Card className='h-fit w-full p-2.5'>
      <Command>
        <CommandInput placeholder='Search a collection...' />
        <CommandList className='max-h-none'>
          {collectionGroups.map((group, groupIndex) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.collectionList.map((item) => (
                  <Link href={`/collections/${item.id - 1}`} key={item.id}>
                    <CommandItem
                      className={`cursor-pointer py-2.5 ${item.id - 1 === SelectedCollectionId && 'bg-accent'}`}
                      useHoverStyle
                    >
                      <p className='flex items-center truncate'>
                        <Library className='mr-2 h-2 w-2 text-muted-foreground' />
                        {item.name}
                      </p>
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
              {groupIndex < collectionGroups.length - 1 && <CommandSeparator />}
            </React.Fragment>
          ))}
        </CommandList>
      </Command>
    </Card>
  )
}
