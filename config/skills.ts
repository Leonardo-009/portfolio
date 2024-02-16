import { IconType } from 'react-icons';

export type SkillCategory =
  | 'Reconhecimento'
  | 'ModelagemDeAmeaças'
  | 'AnáliseDeVulnerabilidade'
  | 'Exploração'
  | 'Pós_Exploração'
  | 'SAST'
  | 'DAST';


export type Skill = {
  name: string;
  icon?: IconType | null; // Make the icon property optional and allow null
};

export const Skills: {
  [key in SkillCategory]: Skill[];
} = {
  Reconhecimento: [
    {
      name: 'Nmap'
    },
    {
      name: 'Shodan'
    },
    {
      name: "Google Dorks"
    },
    {
      name: 'Wireshark'
    },
    {
      name: 'Burp Suite'
    },
    {
      name: 'OWASP_ZAP',
    },
  ],

  ModelagemDeAmeaças: [
    {
      name: 'Threat Modeling'
    },
    {
      name: 'DREAD Score'
    },
    {
      name: "Attack Tree"
    },
    {
      name: 'STRIDE Model'
    },
  ],

  AnáliseDeVulnerabilidade: [
    {
      name: 'OpenSCAP'
    },
    {
      name: 'Wfuzz'
    },
  ],
  Exploração: [
    {
      name: 'Metasploit Framework-'
    },
    {
      name: 'ExploitDB'
    },
    {
      name: "SQLMap"
    },
    {
      name: 'Hydra'
    },
    {
      name: 'ZAP'
    },
    {
      name: 'Burp Suite'
    },
    {
      name: 'CrackMapExec'
    },
    {
      name: 'Sqlninja'
    },
    {
      name: 'PowerSploit'
    },
  ],
  Pós_Exploração: [
    {
      name: 'Meterpreter'
    },
    {
      name: 'PowerShell Empire'
    },
    {
      name: 'Metasploit Framework'
    },
    {
      name: 'CrackMapExec'
    },
  ],
  SAST: [
    {
      name: 'SonarQube',
    },
    {
      name: 'Veracode',
    },
    {
      name: 'Fortify',
    },
  ],
  DAST: [
    {
      name: 'AppScan',
    },
    {
      name: 'OWASP ZAP',
    }
  ]
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
