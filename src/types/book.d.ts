type Book = {
  id: number
  title: string
  subtitle: string
  publication_year: number
  publisher: string
  description: string
  cover_image_url: string
  status: 'read' | 'unread' | 'reading'
  rating: 0 | 1 | 2 | 3 | 4 | 5
  location: string
  selected?: boolean
}
