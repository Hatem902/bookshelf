import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { collections } from '@/mock-data/collections'
import { Card } from './ui/card'
import Link from 'next/link'

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
    name: 'Your Collections',
    collectionList: collections.map(({ name, id }) => ({ name, id })),
  },
]

export const CollectionCommand = () => {
  return (
    <Card className='h-full w-full p-2.5'>
      <Command>
        <CommandInput placeholder='Search a collection...' />
        <CommandList>
          <CommandEmpty>No collections found.</CommandEmpty>
          {collectionGroups.map((group, groupIndex) => (
            <React.Fragment key={group.name}>
              <CommandGroup heading={group.name}>
                {group.collectionList.map((item) => (
                  <Link href={`/collections/${item.id}`} key={item.id}>
                    <CommandItem className='cursor-pointer' useHoverStyle>
                      <p className='truncate'>{item.name}</p>
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
