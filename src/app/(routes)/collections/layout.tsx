import { CollectionCommand } from '@/components/collection-command'
import { ProfileCard } from '@/components/profile-card'
import { collections } from '@/mock-data/collections'

export default function CollectionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='flex h-screen w-full max-w-screen-xl p-4'>
      <div className='flex w-[280] flex-col space-y-3'>
        <ProfileCard />
        <CollectionCommand />
      </div>
      {children}
    </div>
  )
}
