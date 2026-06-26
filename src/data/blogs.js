// Thoughts & blogs — placeholder posts for now.
// Each post links to its own article page at /blog/<slug>.

export const posts = [
  {
    slug: 'first-post',
    title: 'My First Post',
    date: '2026-06-01',
    readTime: '4 min read',
    tags: ['Writing', 'Intro'],
    excerpt:
      'A placeholder for the first thing I write here — a quick hello, what this space is for, and what I hope to share over time.',
    cover: { type: 'image' },
    body: [
      'This is a placeholder article. Replace this text with your first real post whenever you are ready.',
      'You can write about anything here — what you are building, something you learned, or an idea you keep coming back to. Each paragraph in this list becomes a paragraph on the page.',
      'Until then, this stands in so the layout and routing can be seen end to end.',
    ],
  },
  {
    slug: 'on-learning',
    title: 'On Learning Hard Things',
    date: '2026-05-18',
    readTime: '6 min read',
    tags: ['Engineering', 'Learning'],
    excerpt:
      'Placeholder thoughts on picking up difficult topics — from operating systems to real-time firmware — and staying patient with the process.',
    cover: { type: 'image' },
    body: [
      'This is a placeholder article about learning hard things.',
      'Use it to reflect on a challenge you worked through, the approach that helped, and what you would tell someone starting out.',
    ],
  },
  {
    slug: 'building-in-public',
    title: 'Building in Public',
    date: '2026-04-30',
    readTime: '5 min read',
    tags: ['Projects', 'Notes'],
    excerpt:
      'A placeholder note on sharing work-in-progress — why it is worth doing and what I have gotten out of it.',
    cover: { type: 'image' },
    body: [
      'This is a placeholder article about building in public.',
      'Swap in your own reflections on sharing projects early and often.',
    ],
  },
  {
    slug: 'why-music',
    title: 'Why I Still Make Time for Music',
    date: '2026-04-12',
    readTime: '3 min read',
    tags: ['Music', 'Life'],
    excerpt:
      'A placeholder piece on cello, piano, and why music stays part of my life alongside engineering.',
    cover: { type: 'image' },
    body: [
      'This is a placeholder article about music.',
      'Tell the story of how you started, what you are working on now, and why it matters to you.',
    ],
  },
]

export function getPost(slug) {
  return posts.find((p) => p.slug === slug) || null
}
