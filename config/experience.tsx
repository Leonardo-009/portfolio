import { Link } from '@chakra-ui/react';

export type Company = 'FortesTecnologia';

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

export const Experiences: Record<Company, CompanyDetail> = {
  FortesTecnologia: {
    name: 'FortesTecnologia',
    longName: 'Fortes Tecnologia',
    url: 'https://www.fortestecnologia.com.br',
    position: 'Estagiário DevOps',
    duration: 'Set 2022 - Dez 2022',
    logo: {
      light: '/worked/fortestecnologia/logo_fortes.png',
      dark: '/worked/fortestecnologia/logo_fortes.png',
    },
    roles: [
      <>Durante minha experiência como estagiário de DevOps, fui responsável por diversas atividades relacionadas ao desenvolvimento de aplicações.
        Meu trabalho envolvia o uso de tecnologias como JavaScript, TypeScript, AWS, Git/GitHub, React, Node.js, HTML e CSS.
        Durante esse período, tive a oportunidade de aprimorar meus conhecimentos em Git e GitHub, especialmente no que diz respeito ao controle de versionamento dos projetos.
        Além disso, adquiri um sólido conhecimento em AWS, especialmente na criação de servidores.
        Ao longo dessa experiência, pude aplicar minhas habilidades técnicas e desenvolver projetos com sucesso, contribuindo para o avanço da equipe.
        Estou constantemente em busca de novas oportunidades para aprender e crescer profissionalmente no campo de DevOps.
      </>,
      <>
        Trabalhou como DevOps na {' '}
        <Link
          aria-label="Fortes Tecnologia"
          href="https://www.fortestecnologia.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Fortes Tecnologia
        </Link>
      </>,
    ],
  },
};

export const ExperiencesList: CompanyDetail[] = [Experiences.FortesTecnologia];
