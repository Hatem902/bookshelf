'use client'
import { SignUpForm } from '@/components/sign-up'
import { useRouter } from 'next/navigation'

export default function Page() {
  const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL
  const token = localStorage.getItem('access-token')
  const router = useRouter()
  if (token) {
    router.push(`${CLIENT_URL}`)
  } else {
    return (
      <>
        <span className='absolute left-8 top-8 text-2xl font-extrabold'>
          Bookshelf
        </span>
        <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
          <div className='w-full max-w-sm'>
            <SignUpForm />
          </div>
        </div>
      </>
    )
  }
}
