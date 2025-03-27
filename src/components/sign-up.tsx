'use client'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRegisterMutation, useUsersQuery } from '@/hooks/queries/auth'
import { useLocalStorage } from '@/hooks/useLocalStorage'
import { useForm, SubmitHandler } from 'react-hook-form'

export function SignUpForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  const { mutate, error } = useRegisterMutation()

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      email: '',
      birthDate: '',
      password: '',
    },
  })
  const onSubmit: SubmitHandler<RegCredentials> = (data) => {
    mutate(data)
  }
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign Up</CardTitle>
          <CardDescription>
            Enter your credentials below to sign-up
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Username</Label>
                <Input
                  id='username'
                  type='text'
                  {...register('username')}
                  placeholder='bklover123'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  {...register('email')}
                  placeholder='m@example.com'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Date of birth</Label>
                <Input
                  id='date-of-birth'
                  {...register('birthDate')}
                  type='date'
                  required
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  id='password'
                  {...register('password')}
                  type='password'
                  required
                />
              </div>
              {error ? (
                <div className='mt-4 text-center text-sm font-semibold text-destructive'>
                  Credentials already used.
                </div>
              ) : null}
              <Button type='submit' className='w-full'>
                Sign up
              </Button>
            </div>
            <div className='mt-4 text-center text-sm'>
              Already have an account?{' '}
              <a href='/login' className='underline underline-offset-4'>
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
