import { Card } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { user } from '@/mock-data/user'

export const ProfileCard = () => (
  <Card className='w-full p-2.5'>
    <div className='flex items-center space-x-4'>
      <Avatar>
        <AvatarImage src='/avatars/06.png' alt='User image' />
        <AvatarFallback>
          {user.username.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div>
        <p className='text-sm font-medium leading-none'>{user.username}</p>
        <p className='text-sm text-muted-foreground'>{user.email}</p>
      </div>
    </div>
  </Card>
)
