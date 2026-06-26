// Central place for site-wide info so it can be reused across pages.

export const profile = {
  name: 'Peter Yan',
  role: 'Computer Science Student @ University of Toronto',
  location: 'Toronto, ON',
  email: 'peteryan1019@gmail.com',
  linkedin: 'https://www.linkedin.com/in/peter-yan-81937122a/',
  github: 'https://github.com/peteryan1019',
  // Drop a real photo at public/images/peter.jpg to replace the placeholder.
  photo: '/images/peter.jpg',
}

// Navigation items — also reused on the home page as intro cards.
export const navItems = [
  {
    to: '/projects',
    label: 'Software Projects',
    short: 'Software Projects',
    blurb:
      'Hardware-meets-software builds — a Bluetooth 3D mouse on bare-metal STM32, an autonomous soccer-playing robot, and a full-stack AI web app.',
    icon: 'code',
  },
  {
    to: '/experience',
    label: 'Work Experiences',
    short: 'Work',
    blurb:
      'From a frontend & data-engineering internship to teaching calculus, plus the hands-on jobs that paid the bills along the way.',
    icon: 'briefcase',
  },
  {
    to: '/blog',
    label: 'Thoughts & Blogs',
    short: 'Blog',
    blurb:
      'Notes and essays on engineering, learning, and the things I find worth thinking carefully about.',
    icon: 'pen',
  },
  {
    to: '/clubs',
    label: 'Club Activities',
    short: 'Clubs',
    blurb:
      'Communities I help build on campus and beyond. Each story links to a write-up of what we did.',
    icon: 'users',
  },
  {
    to: '/hobbies',
    label: 'Hobbies',
    short: 'Hobbies',
    blurb:
      'Away from the keyboard I play cello and piano — here are a few recordings of pieces I love.',
    icon: 'music',
  },
  {
    to: '/contact',
    label: 'Contact',
    short: 'Contact',
    blurb:
      'The fastest ways to reach me — email, LinkedIn, and GitHub. I am always happy to chat.',
    icon: 'mail',
  },
]
