// Software projects sourced from Peter's ResumeBuilder profile.
// Add a `media.src` when a project-specific image becomes available; projects
// without one use the site's intentional project artwork.

const projects = [
  {
    title: 'ResumeBuilder',
    meta: 'July – August 2026',
    tags: ['Angular', 'Express.js', 'TypeScript', 'Docker', 'nginx', 'AI'],
    description:
      'A full-stack platform that generates a tailored resume PDF from a job posting, a candidate’s complete profile, and a selected template. The guided workflow brings an AI resume writer and coach together so each generation session feels like working with a real resume team.',
    bullets: [
      'Built an Angular frontend and Express.js backend in TypeScript, including an editor for refining generated resumes.',
      'Containerized the application with Docker and deployed it to DigitalOcean behind an nginx reverse proxy.',
    ],
    links: [{ label: 'Visit ResumeBuilder', href: 'https://resumebuilder.works/' }],
    media: { type: 'image' },
  },
  {
    title: 'Personal Website',
    meta: 'July 2026',
    tags: ['React', 'React Router', 'Vite', 'GitHub Pages'],
    description:
      'A responsive single-page application built with React and deployed on GitHub Pages. It brings my projects, work experience, writing, club activities, and music into one place.',
    bullets: [
      'Organized the site around reusable, data-driven components so portfolio content can be updated independently from page layouts.',
      'Created dedicated routes for projects, experience, blogs, clubs, hobbies, and contact information.',
    ],
    links: [{ label: 'Explore this site', href: 'https://peteryan1019.github.io/' }],
    media: { type: 'image' },
  },
  {
    title: 'AI-Powered Banner Design Web App',
    meta: 'April 2026',
    tags: ['Next.js', 'Three.js', 'AI Integration', 'GitHub Actions', 'Agile / SCRUM'],
    description:
      'A full-stack Next.js application that generates custom car-magnet banner designs with AI and previews them live on a 3D vehicle model. Users describe what they want, the app generates artwork, and Three.js renders the result on a rotating car in the browser.',
    bullets: [
      'Integrated AI into the design-generation and editing workflow, including system prompts that guide model behavior.',
      'Built and deployed the application through a GitHub Actions workflow while managing development with SCRUM and Jira.',
    ],
    links: [{ label: 'Live demo', href: 'https://car-magnet-app.vercel.app/' }],
    media: {
      type: 'image',
      src: '/images/car_magnet_demo.png',
      alt: 'AI-powered banner design web app',
    },
  },
  {
    title: 'Bluetooth 3D Mouse',
    meta: 'June 2025',
    tags: ['STM32', 'Zephyr RTOS', 'Bluetooth LE', 'C++', 'IoT'],
    description:
      'A Bluetooth 3D mouse built on an STM32 Discovery board that turns the board’s rotational motion into cursor movement and clicks on a computer.',
    bullets: [
      'Programmed the board firmware in C++ on the Zephyr real-time operating system.',
      'Converted live motion readings into responsive on-screen mouse movement and click input over Bluetooth.',
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/peteryan1019/bluetooth-3D-mouse' },
    ],
    media: {
      type: 'image',
      src: '/images/stm32l4.jpeg',
      alt: 'Bluetooth 3D mouse prototype',
    },
  },
  {
    title: 'Autonomous Robot Soccer Player',
    meta: 'November 2024',
    tags: ['C', 'Finite-State Machines', 'Computer Vision', 'PID Control'],
    description:
      'An autonomous robot soccer player driven by a finite-state machine in C. It uses an overhead webcam to interpret the field, choose its next action, and play against an opponent without human control.',
    bullets: [
      'Implemented image-processing logic that extracts useful field data from noisy webcam frames.',
      'Used PID-based motor control to produce smooth, accurate movement during a match.',
    ],
    links: [
      {
        label: 'Watch match video',
        href: 'https://www.cs.utoronto.ca/~strider/video/RS24/Match_6.1.mp4',
      },
    ],
    media: {
      type: 'video',
      src: 'https://www.cs.utoronto.ca/~strider/video/RS24/Match_6.1.mp4',
    },
  },
  {
    title: 'TLS 1.3 Implementation',
    meta: 'October 2024',
    tags: ['Python', 'TLS 1.3', 'Diffie–Hellman', 'TCP Sockets', 'Cryptography'],
    description:
      'A course project implementing a custom TLS 1.3-style secure communication protocol over TCP sockets in Python.',
    bullets: [
      'Implemented the handshake flow, certificate verification, Diffie–Hellman key exchange, and encrypted client–server messaging.',
      'Worked with Python cryptography modules for secure randomness, ciphers, key derivation, hashing, public keys, and signatures; earned an A in the course.',
    ],
    links: [],
    media: { type: 'image' },
  },
  {
    title: 'University Event App',
    meta: 'November – December 2023',
    tags: ['Java', 'Android Studio', 'Android'],
    description:
      'An Android application built in Java for a university community. Administrators can publish events, while students can discover and join them.',
    bullets: [
      'Created separate event-management and participation flows for university administrators and students.',
      'Added reviews and feedback so students can share their experience after an event.',
    ],
    links: [],
    media: { type: 'image' },
  },
]

export default projects
