type User = {
  id: number
  username: string
  email: string
  createdAt: string
  birthDate: string
  collections: {
    id: number
    name: string
    description: string
    shareable: boolean
    createdAt: string
    books: {
      id: number
      isbn: string
      title: string
      subtitle: string
      numberOfPages: string
      publishDate: string
      publishers: {
        id: number
        name: string
        books: string[]
      }[]
      description: string
      coverImageUrl: string
      createdAt: string
      authors: {
        id: number
        name: string
        url: string
      }[]
      userBooks: string[]
      coverImage: {
        id: number
        small: string
        medium: string
        large: string
      }
      rate: number
    }[]
  }[]
}
