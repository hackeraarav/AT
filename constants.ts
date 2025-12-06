import { Project, Skill, ProcessStep } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "CRIMSON ECHO",
    category: "AI + Color Theory",
    description: "An exploration of red wavelengths using generative fill and neural style transfer.",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop", 
    tools: ["Midjourney", "Photoshop AI", "Davinci Resolve"]
  },
  {
    id: 2,
    title: "SYNTHETIC SOUL",
    category: "Motion Identity",
    description: "Brand identity for a fintech startup focused on algorithmic trading.",
    image: "https://picsum.photos/800/600?random=2",
    tools: ["Cinema 4D", "Redshift", "Illustrator"]
  },
  {
    id: 3,
    title: "ECHO CHAMBER",
    category: "Interactive WebGL",
    description: "Audio-reactive web experience exploring digital acoustics.",
    image: "https://picsum.photos/800/600?random=3",
    tools: ["Three.js", "React", "Web Audio API"]
  },
  {
    id: 4,
    title: "VOID RUNNER",
    category: "Concept Design",
    description: "Character and vehicle design for a cyberpunk narrative.",
    image: "https://picsum.photos/800/600?random=4",
    tools: ["ZBrush", "Stable Diffusion", "Photoshop"]
  }
];

export const SKILLS: Skill[] = [
  {
    name: "AI Video Editing",
    level: "Expert",
    icon: "Clapperboard",
    description: "Enhancing narratives with generative AI and neural filters."
  },
  {
    name: "AI Synthesis",
    level: "Advanced",
    icon: "Cpu",
    description: "Prompt engineering and model training for visual generation."
  },
  {
    name: "Interactive Web",
    level: "Proficient",
    icon: "Globe",
    description: "Building React/WebGL experiences that respond to users."
  },
  {
    name: "Creative Direction",
    level: "Expert",
    icon: "Eye",
    description: "Guiding visual narratives from concept to final render."
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "Input & Analyze",
    description: "Deconstruct the brief. Feed parameters into the conceptual model."
  },
  {
    step: "02",
    title: "Generative Iteration",
    description: "Rapid prototyping using AI tools to explore 100+ variations."
  },
  {
    step: "03",
    title: "Synthesis & Refine",
    description: "Human curation meets technical precision. 3D modeling and retouching."
  },
  {
    step: "04",
    title: "Final Output",
    description: "Optimized rendering for web, film, or immersive display."
  }
];
