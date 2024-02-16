import { Link } from '@chakra-ui/react';

export type Company = 'FortesTecnologia';
export type Company1 = 'Fábrica_de_Gênios';

export type CompanyDetail = {
  name: string;
  longName: string;
  subDetail?: string;
  url: string;
  position: string;
  duration: string;
  logo: {
    light: string;
    dark?: string;
  };
  roles?: JSX.Element[];
};

export const ExperiencesFT: Record<Company, CompanyDetail> = {
  FortesTecnologia: {
    name: 'FortesTecnologia',
    longName: 'Fortes Tecnologia',
    url: 'https://www.linkedin.com/company/fortes-tecnologia/',
    position: 'Estagiário DevOps',
    duration: 'Set 2022 - Dez 2022',
    logo: {
      light: '/worked/fortestecnologia/logo_fortes.png',
      dark: '/worked/fortestecnologia/logo_fortes.png',
    },
    roles: [
      <>
      - Atuação em atividades envolvendo DevOps.<br/>
      - Automatizar processos de criação e manutenção de ambientes em Cloud(AWS).<br/>
      - Versionamento (Git e GitHub).<br/>
      - Tecnologias utilizadas ( JavaScript, TypeScript, React, Node.js, bootstrap, Chakra UI, HTML e CSS).<br/>
      </>,
      <>
        Trabalhou como DevOps na {' '}
        <Link
          aria-label="Fortes Tecnologia"
          href="https://www.linkedin.com/company/fortes-tecnologia/"
          target="_blank"
          rel="noreferrer"
        >
          Fortes Tecnologia
        </Link>
      </>,
    ],
  },
};
export const ExperiencesFG: Record<Company1, CompanyDetail> = {
  Fábrica_de_Gênios: {
    name: 'Fábrica de Gênios',
    longName: 'Fábrica de Gênios',
    url: 'https://www.linkedin.com/company/fgenios/?originalSubdomain=br',
    position: 'Estagiário DevOps',
    duration: 'Set 2023 - Atualmente',
    logo: {
      light: '/worked/fabricadegenios/jobs.png',
      dark: '/worked/fabricadegenios/jobs.png',
    },
    roles: [
      <>- Atuação em atividades envolvendo DevOps e DevSecOps.<br/>
        - Automatizar processos de criação e manutenção de ambientes em Cloud(Azure).<br/>
        - Criar e participar da documentação das rotinas e processos de desenvolvimento e infraestrutura.<br/>
        - Serviços Web (Nginx).<br/>
        - Ferramentas de Automação (Ansible).<br/>
        - Automação com Infraestrutura como código (IaC).<br/>
        - Containers (Kubernets e Docker).<br/>
        - Versionamento (Git e GitHub).<br/>
        - Processos e Ferramentas de Integração contínua e Entrega contínua(Jenkins)<br/>
        - Monitoramento do ambiente com ferramentas SIEM (Wazuh).<br/>
      </>,
      <>
        Trabalhou como DevOps na {' '}
        <Link
          aria-label="Fábrica de Gênios"
          href="https://www.linkedin.com/company/fgenios/?originalSubdomain=br"
          target="_blank"
          rel="noreferrer"
        >
          Fábrica de Gênios
        </Link>
      </>,
    ],
  },
};


export const ExperiencesList: CompanyDetail[] = [ExperiencesFT.FortesTecnologia, ExperiencesFG.Fábrica_de_Gênios];
