const collections: Collection[] = [
  {
    id: 1,
    name: 'Science Fiction Classics',
    description: 'A collection of must-read sci-fi masterpieces.',
    books: [
      {
        id: 1,
        title: 'Dune',
        subtitle: 'The Spice Must Flow',
        publication_year: 1965,
        publisher: 'Chilton Books',
        description:
          'A science fiction epic that explores politics, religion, and ecology in a distant future.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'read',
        rating: 5,
        location: 'Shelf A3',
      },
      {
        id: 2,
        title: 'Neuromancer',
        subtitle: 'A Cyberpunk Classic',
        publication_year: 1984,
        publisher: 'Ace Books',
        description:
          'A genre-defining cyberpunk novel that follows a washed-up hacker in a high-tech dystopia.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'unread',
        rating: 0,
        location: 'Shelf B2',
      },
    ],
  },
  {
    id: 2,
    name: 'Philosophy & Thought',
    description: 'Books that make you think deeper about life and existence.',
    books: [
      {
        id: 3,
        title: 'Meditations',
        subtitle: 'Thoughts of a Roman Emperor',
        publication_year: 180,
        publisher: 'Unknown',
        description:
          'The personal reflections of Marcus Aurelius on Stoicism and personal virtue.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'reading',
        rating: 4,
        location: 'Desk',
      },
      {
        id: 4,
        title: 'The Republic',
        subtitle: 'Justice, Order, and The Ideal State',
        publication_year: -380,
        publisher: 'Unknown',
        description:
          "Plato's famous dialogue on justice, political philosophy, and the ideal society.",
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'unread',
        rating: 0,
        location: 'Shelf C1',
      },
    ],
  },
  {
    id: 3,
    name: 'Modern Fiction Favorites',
    description: 'Bestselling novels from the 21st century.',
    books: [
      {
        id: 5,
        title: 'The Road',
        subtitle: 'A Post-Apocalyptic Journey',
        publication_year: 2006,
        publisher: 'Alfred A. Knopf',
        description:
          'A bleak yet beautiful story of a father and son struggling to survive in a ruined world.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'read',
        rating: 5,
        location: 'Shelf D2',
      },
      {
        id: 6,
        title: 'The Night Circus',
        subtitle: 'A Magical Love Story',
        publication_year: 2011,
        publisher: 'Doubleday',
        description:
          'A mesmerizing novel about a mysterious circus that only appears at night.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'unread',
        rating: 0,
        location: 'Shelf D3',
      },
    ],
  },
  {
    id: 4,
    name: 'Tech & Innovation',
    description:
      'Books that dive into the future of technology and human progress.',
    books: [
      {
        id: 7,
        title: 'The Innovators',
        subtitle:
          'How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution',
        publication_year: 2014,
        publisher: 'Simon & Schuster',
        description:
          'A deep dive into the people who shaped the modern tech world.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'reading',
        rating: 4,
        location: 'Desk',
      },
      {
        id: 8,
        title: 'Life 3.0',
        subtitle: 'Being Human in the Age of Artificial Intelligence',
        publication_year: 2017,
        publisher: 'Knopf',
        description:
          'An exploration of the future impact of AI on society and human existence.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'unread',
        rating: 0,
        location: 'Shelf E1',
      },
    ],
  },
  {
    id: 5,
    name: 'Psychology & Self-Improvement',
    description: 'Books that help understand the mind and personal growth.',
    books: [
      {
        id: 9,
        title: 'Thinking, Fast and Slow',
        subtitle: 'The Two Systems That Drive How We Think',
        publication_year: 2011,
        publisher: 'Farrar, Straus and Giroux',
        description: 'A deep look into cognitive biases and decision-making.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'read',
        rating: 5,
        location: 'Shelf F2',
      },
      {
        id: 10,
        title: 'Atomic Habits',
        subtitle: 'Tiny Changes, Remarkable Results',
        publication_year: 2018,
        publisher: 'Avery',
        description:
          'A practical guide to building good habits and breaking bad ones.',
        cover_image_url: 'https://via.placeholder.com/150',
        status: 'unread',
        rating: 0,
        location: 'Shelf F3',
      },
    ],
  },
]

export { collections }
