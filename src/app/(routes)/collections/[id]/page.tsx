import { collections } from '@/mock-data/collections'

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const collection = collections[(await params).id]

  return <div>{collection.description}</div>
}
