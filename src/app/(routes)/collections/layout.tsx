import { CollectionCommand } from '@/components/collection-command'
import { ProfileCard } from '@/components/profile-card'

export default function CollectionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex w-full max-w-screen-2xl space-x-8 p-6 py-11'>
      <div className='flex w-[280] flex-col space-y-3'>
        <ProfileCard />
        <CollectionCommand />
      </div>
      {children}
    </div>
  )
}
