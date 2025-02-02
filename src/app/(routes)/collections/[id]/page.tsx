import { BookTable } from '@/components/book-table'
import { ModeToggle } from '@/components/mode-toggle'
import { collections } from '@/mock-data/collections'

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ id: number }>
}) {
  const collection = collections[(await params).id]

  return (
    <div className='w-full'>
      <main className='bg-background text-foreground'>
        <div className='container mx-auto pb-10 pt-1'>
          <div className='flex justify-between'>
            <div className='mb-8 flex items-center justify-between'>
              <div className='space-y-0.5'>
                <h2 className='text-2xl font-bold tracking-tight'>
                  {collection.name}
                </h2>
                <p className='text-muted-foreground'>
                  {collection.description}
                </p>
              </div>
            </div>
            <ModeToggle />
          </div>
          <BookTable collection={collection} />
        </div>
      </main>
    </div>
  )
}
