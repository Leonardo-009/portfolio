import { IconType } from 'react-icons';
import {
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiVuedotjs,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiVisualstudiocode,
  SiMicrosoft,
  SiChakraui,
  SiTerraform,
  SiAmazonaws,
  SiKalilinux,
  SiPython,
} from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { DiUbuntu } from 'react-icons/di';

export type SkillCategory =
  | 'SegurançaDaInformação'
  | 'CyberSecurity'
  | 'database'
  | 'Developer'
  | 'DevOps';

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
  CyberSecurity: [
    {
      name: 'OWSP',
    },
    {
      name: 'Firewall',
    },
    {
      name: 'Antivírus',
    },
    {
      name: "Kali Linux",
      icon: SiKalilinux,
    },
    {
      name: "Pentest",
    },
    {
      name: "Hacker Ético",
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
      name: 'Terraform',
      icon: SiTerraform,
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
    {
      name: 'Amazon AWS',
      icon: SiAmazonaws,
    },
    {
      name: "Python",
      icon: SiPython,
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
