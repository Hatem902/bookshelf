'use client'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { useLocalStorage } from '../useLocalStorage'
import { useRouter } from 'next/navigation'
const API_URL = process.env.NEXT_PUBLIC_API_URL
export const useUserQuery = () => {
  const token = localStorage.getItem('access-token')
  const userId = localStorage.getItem('user-id')
  return useQuery({
    queryKey: ['user'],
    queryFn: async (): Promise<User> =>
      (
        await axios.get(`${API_URL}/api/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      ).data,
  })
}
