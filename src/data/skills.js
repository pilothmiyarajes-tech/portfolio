// src/data/skills.js
export const skillCategories = ['Frontend', 'Backend', 'Tools'];

const skills = [
  // Frontend
  { name: 'React.js',       icon: 'SiReact',       category: 'Frontend', level: 92 },
  { name: 'JavaScript',     icon: 'SiJavascript',  category: 'Frontend', level: 90 },
  { name: 'TypeScript',     icon: 'SiTypescript',  category: 'Frontend', level: 75 },
  { name: 'HTML5',          icon: 'SiHtml5',       category: 'Frontend', level: 95 },
  { name: 'CSS3',           icon: 'SiCss',         category: 'Frontend', level: 88 },
  { name: 'Tailwind CSS',   icon: 'SiTailwindcss', category: 'Frontend', level: 85 },

  // Backend
  { name: 'Node.js',        icon: 'SiNodedotjs',   category: 'Backend',  level: 80 },
  { name: 'Express.js',     icon: 'SiExpress',     category: 'Backend',  level: 78 },
  { name: 'MongoDB',        icon: 'SiMongodb',     category: 'Backend',  level: 72 },
  { name: 'PostgreSQL',     icon: 'SiPostgresql',  category: 'Backend',  level: 65 },
  { name: 'Firebase',       icon: 'SiFirebase',    category: 'Backend',  level: 70 },

  // Tools
  { name: 'Git & GitHub',   icon: 'SiGithub',      category: 'Tools',    level: 90 },
  { name: 'Docker',         icon: 'SiDocker',      category: 'Tools',    level: 60 },
  { name: 'Figma',          icon: 'SiFigma',       category: 'Tools',    level: 68 },
  { name: 'VS Code',        icon: 'VscVscode',          category: 'Tools', level: 95 },
];

export default skills;
