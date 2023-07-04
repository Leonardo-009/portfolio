import { IconType } from 'react-icons'
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
  SiAmazonaws
} from 'react-icons/si'
import {FaLinux, } from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
export type SkillCategory  =
  | 'backend'
  | 'frontend'
  | 'cicd'
  | 'database'
  | 'ui frameworks'
  | 'productivity boost'
  | 'desktop'
  | 'cloud'

export type Skill = {
  name: string
  icon: IconType
}

export const Skills: {
  [key in SkillCategory]: Skill[]
} = {
  backend: [
    {
      name: 'Node',
      icon: SiNodedotjs,
    },
    {
      name: 'JavaScript',
      icon: SiJavascript,
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
    },
  ],
  frontend: [
    {
      name: 'React',
      icon: SiReact,
    },
    {
      name: 'NextJS',
      icon: SiNextdotjs,
    },
    {
      name: 'VueJS',
      icon: SiVuedotjs,
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
  cicd: [
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
  ],
  'ui frameworks': [
    {
      name: 'Styled Components',
      icon: SiStyledcomponents,
    },
    {
      name: 'ChakraUI',
      icon: SiChakraui,
    },
  ],
  'productivity boost': [
    {
      name: 'VSCode',
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
  ],
  desktop: [
    {
      name: 'Windows',
      icon: SiMicrosoft,
    },
    {
      name: 'Linux',
      icon: FaLinux,
    },
  ],
  cloud: [
    {
      name: 'Amazon AWS',
      icon: SiAmazonaws,
    },

  ],
}

export const splitSkills = (srcArray: Skill[]) => {
  const arrLength = srcArray.length
  const isEvenChunk = arrLength % 2 === 0

  let chunk = 4
  if (isEvenChunk) {
    chunk = arrLength / 2
  } else if (arrLength <= 5 && arrLength > 2) {
    chunk = 3
  }

  let i = 0
  let j = 0
  const temporary = []
  for (i = 0, j = srcArray.length; i < j; i += chunk) {
    temporary.push(srcArray.slice(i, i + chunk))
  }
  return temporary
}
