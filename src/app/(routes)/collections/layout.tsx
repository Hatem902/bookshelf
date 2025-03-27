'use client'
import { CollectionCommand } from '@/components/collection-command'
import { ProfileCard } from '@/components/profile-card'
import { useUserQuery } from '@/hooks/queries/user'
import { useRouter } from 'next/navigation'
export default function CollectionsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL
  const token = localStorage.getItem('access-token')
  const router = useRouter()
  if (!token) {
    router.push(`${CLIENT_URL}/sign-up`)
  } else {
    return (
      <div className='flex w-full max-w-screen-2xl space-x-8 self-center p-6 py-11'>
        <div className='flex w-[280] flex-col space-y-3'>
          <ProfileCard />
          <CollectionCommand />
        </div>
        {children}
      </div>
    )
  }
}
