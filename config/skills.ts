import { IconType } from 'react-icons';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiAmazonaws,
  SiAwslambda,
  SiPython,
  SiAmazonec2,
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { DiUbuntu } from 'react-icons/di';



export type SkillCategory =
  | 'SegurançaDaInformação'
  | 'database'
  | 'Developer'
  | 'DevOps'
  | 'cloud';

export type Skill = {
  name: string;
  icon?: IconType | null; // Make the icon property optional and allow null
};

export const Skills: {
  [key in SkillCategory]: Skill[];
} = {
  SegurançaDaInformação: [
    {
      name: 'ISO 27001',
    },
    {
      name: 'LGPD',
    },
  ],

  Developer: [
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NodeJS',
      icon: SiNodedotjs,
    },
    {
      name: 'Visual Studio Code',
      icon: SiVisualstudiocode,
    },
  ],

  database: [
    {
      name: 'PostgreSQL',
      icon: SiPostgresql,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
  ],
  DevOps: [
    {
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: 'Kubernetes',
      icon: SiKubernetes,
    },
    {
      name: 'Git',
      icon: SiGit,
    },
    {
      name: 'Github',
      icon: AiFillGithub,
    },
    {
      name: "Ubuntu",
      icon: DiUbuntu,
    },
  ],
  cloud: [
    {
      name: 'Amazon AWS',
      icon: SiAmazonaws,
    },
    {
      name: 'Lambda',
      icon: SiAwslambda,
    },
    {
      name: 'EC2',
      icon: SiAmazonec2,
    },
  ],
};

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length;
  const isEvenChunk = arrLength % 2 === 0;

  let chunk = 4;
  if (isEvenChunk) {
    chunk = arrLength / 2;
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3;
  }

  let i = 0;
  let j = 0;
  const temporary = [];
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk));
  }
  return temporary;
};
