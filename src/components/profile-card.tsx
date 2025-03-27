'use client'
import { Card } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useUserQuery } from '@/hooks/queries/user'

export const ProfileCard = () => {
  const { data } = useUserQuery()
  return (
    <Card className='w-full p-2.5'>
      <div className='flex items-center space-x-4'>
        <Avatar>
          <AvatarImage src='/avatars/04.png' alt='User image' />
          <AvatarFallback>
            {data?.username.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className='text-sm font-medium leading-none'>{data?.username}</p>
          <p className='text-sm text-muted-foreground'>{data?.email}</p>
        </div>
      </div>
    </Card>
  )
}
