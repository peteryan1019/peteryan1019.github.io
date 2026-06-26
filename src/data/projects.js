// Software projects — sourced from Peter's resume.
// To add a real image/video, set `media.src` (image) and drop the file in public/images/.

const projects = [
  {
    title: 'Bluetooth 3D Mouse',
    meta: 'June 2025',
    tags: ['STM32', 'Zephyr RTOS', 'Bluetooth LE', 'Embedded C', 'IoT'],
    description:
      'A Bluetooth 3D mouse built on a bare-metal STM32 discovery board that turns the rotational motion of the board into cursor movement and clicks on a Windows PC. The firmware reads the on-board gyroscope in real time, fuses the motion data, and streams HID mouse reports over Bluetooth Low Energy.',
    bullets: [
      'Programmed on top of the Zephyr real-time operating system for deterministic, low-latency motion handling.',
      'Implemented fault-tolerant signal processing to smooth noisy gyroscope data and prevent cursor drift.',
    ],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/peteryan1019/bluetooth-3D-mouse' },
    ],
    media: { type: 'image', src: '/images/stm32l4.jpeg', alt: 'Bluetooth 3D mouse prototype' },
  },
  {
    title: 'Autonomous Robot Soccer Player',
    meta: 'October 2024',
    tags: ['C', 'Finite-State Machines', 'PID Control', 'Computer Vision'],
    description:
      'An autonomous robot that plays one-on-one soccer against an opponent, driven entirely by a finite-state machine written in C. The robot perceives the field through an overhead webcam, decides on a strategy, and drives toward the ball — no human in the loop. The clip here is a real match where my robot played on the blue team.',
    bullets: [
      'Designed fault-tolerant vision algorithms to track the ball and goals from noisy webcam frames.',
      'Tuned PID-based motor control for smooth, accurate movement and ball interception.',
    ],
    links: [
      {
        label: 'Match video',
        href: 'https://www.cs.utoronto.ca/~strider/video/RS24/Match_6.1.mp4',
      },
    ],
    media: {
      type: 'video',
      src: 'https://www.cs.utoronto.ca/~strider/video/RS24/Match_6.1.mp4',
    },
  },
  {
    title: 'AI-Powered Banner Design Web App',
    meta: 'January – April 2026',
    tags: ['Next.js', 'Three.js', 'Gemini API', 'Vercel', 'PostgreSQL'],
    description:
      'A full-stack Next.js application that generates custom car-magnet banner designs with AI and previews them live on a 3D vehicle model. Users describe what they want, the app generates artwork through the Gemini API, and Three.js renders the result wrapped onto a rotating car in the browser.',
    bullets: [
      'Designed the data model and storage layer that backs every generated design.',
      'Integrated the AI generation, payment, and deployment pipelines end to end on Vercel.',
    ],
    links: [{ label: 'Live demo', href: 'https://car-magnet-app.vercel.app/' }],
    media: { type: 'image', src: '/images/car_magnet_demo.png', alt: 'AI-powered banner design web app' },
  },
]

export default projects
