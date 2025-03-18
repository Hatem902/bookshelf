import { SignUpForm } from '@/components/sign-up'

export default function Page() {
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
