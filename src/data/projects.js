// src/data/projects.js
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    id: 1,
    title: 'ShopNow – E-Commerce Platform',
    description:
      'A full-featured online shopping platform with product listings, cart management, secure checkout, and real-time inventory updates.',
    image: project1,
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'TaskFlow – Project Manager',
    description:
      'A Kanban-style project management dashboard with drag-and-drop tasks, team workspaces, and real-time collaboration features.',
    image: project2,
    tech: ['React', 'Firebase', 'Framer Motion', 'Tailwind CSS'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'WeatherWave – Weather App',
    description:
      'A beautiful weather application with live forecasts, location search, animated weather icons, and hourly/weekly breakdowns.',
    image: project3,
    tech: ['React', 'OpenWeather API', 'Chart.js', 'CSS Animations'],
    github: 'https://github.com',
    demo: 'https://example.com',
    category: 'Frontend',
  },
];

export default projects;
