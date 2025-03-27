'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useLocalStorage } from '../useLocalStorage'
import { useRouter } from 'next/navigation'
const API_URL = process.env.NEXT_PUBLIC_API_URL
const CLIENT_URL = process.env.NEXT_PUBLIC_CLIENT_URL
export const useUsersQuery = () =>
  useQuery({
    queryKey: ['users'],
    queryFn: async (): Promise<User[]> =>
      (await axios.get(`${API_URL}/api/users`)).data,
  })

export const useRegisterMutation = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async (regCredentials: RegCredentials): Promise<TokenInfo> =>
      (await axios.post(`${API_URL}/api/auth/register`, regCredentials)).data,
    onSuccess: (res) => {
      router.push(`${CLIENT_URL}/login`)
    },
  })
}

export const useLoginMutation = () => {
  const router = useRouter()
  return useMutation({
    mutationFn: async (loginCredentials: LoginCredentials) =>
      (await axios.post(`${API_URL}/api/auth/login`, loginCredentials)).data,
    onSuccess: (res) => {
      localStorage.setItem('access-token', res.accessToken)
      localStorage.setItem('user-id', res.userId)
      router.push(`${CLIENT_URL}`)
    },
  })
}
