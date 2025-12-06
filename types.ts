export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tools: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
