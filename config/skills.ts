import { IconType } from 'react-icons';
import {
  SiTypescript,
  SiReact,
  SiDocker,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiAmazonaws,
  SiAwslambda,
  SiPython,
  SiAmazonec2,
  SiMongodb,
  SiJavascript,
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { FaAngular, FaLinux, FaNode } from 'react-icons/fa';


export type SkillCategory =
  | 'FrontEnd'
  | 'database'
  | 'BackEnd'
  | 'cloud'
  | 'Conhecimento';


export type Skill = {
  name: string;
  icon?: IconType | null; // Make the icon property optional and allow null
};

export const Skills: {
  [key in SkillCategory]: Skill[];
} = {
  FrontEnd: [
    {
      name: 'Angular',
      icon: FaAngular,
    },
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'Typescript',
      icon: SiTypescript,
    }
  ],

  BackEnd: [
    {
      name: "Javascript",
      icon: SiJavascript,
    },
    {
      name: "Python",
      icon: SiPython,
    },
    {
      name: 'Node',
      icon: FaNode,
    },
  ],

  database: [
    {
      name: 'Mongodb',
      icon: SiMongodb,
    },
    {
      name: 'MySQL',
      icon: SiMysql,
    },
  ],
  Conhecimento: [
    {
      name: 'Visual Studio Code',
      icon: SiVisualstudiocode,
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
      name: 'Docker',
      icon: SiDocker,
    },
    {
      name: "Linux",
      icon: FaLinux,
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
