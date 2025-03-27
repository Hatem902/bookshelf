import { useEffect, useState } from 'react'

// Utility function to safely get localStorage value
export function getLocalStorageItem(key: string): string | null {
  // Check if we're in the browser environment
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
  return null
}

// Utility function to safely set localStorage value
export function setLocalStorageItem(key: string, value: string): void {
  // Check if we're in the browser environment
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value)
  }
}

// Custom hook for using localStorage with React state
export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T) => void] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  // Return a wrapped version of useState's setter function
  const setValue = (value: T) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      // Save state
      setStoredValue(valueToStore)

      // Save to local storage
      if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
