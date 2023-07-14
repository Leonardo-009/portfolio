import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
} from '@chakra-ui/react'
import { SiJavascript, SiTypescript, SiNodedotjs, SiReact, SiNextdotjs, SiPython } from 'react-icons/si'
import { IoMdOpen, IoIosCafe } from 'react-icons/io'
import { ListIcon } from '@chakra-ui/react'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2021

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Um resumo sobre mim.
      </Heading>
      <Text variant="description">
        Meu nome é Leonardo Pelanda, tenho 27 anos e sou apaixonado pela cultura DevOps, DevSecOps e Segurança da informação.<br/><br/>
        Estou prestes a concluir minha graduação em Análise e Desenvolvimento de Sistemas em 2023. Além disso, tenho grande entusiasmo e interesse pela Segurança da informação.<br/><br/>
        Ao longo dos últimos {professionalYears} anos,  tenho me dedicado ao estudo e aprimoramento de um amplo conjunto de tecnologias, o que me proporcionou um profundo conhecimento na área de desevolvimento. Atualmente, tenho buscado uma oportunidade de crescimento na área de TI e estou sempre em busca de novos desafios que me permitam expandir ainda mais minhas habilidades e conhecimentos.<br /> <br />
        Vamos explorar algumas das tecnologias com as quais tenho experiência? Então, prepare-se para descobrir algumas das habilidades minhas, voce gostaria de um {' '}
        <Tooltip
          label="Um cafézinho?"
          aria-label="Eu Amo Café!"
          hasArrow
        >
          <Text as="span" variant="emphasis" color="#45aaf2">
            Café
          </Text>
        </Tooltip>{' '}
        <Icon as={IoIosCafe} />.
      </Text>

      <SimpleGrid columns={2} spacing={4} >
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color="blue.500" fontSize="2em" />
            JavaScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color="blue.500" fontSize="2em" />
            TypeScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPython} color="blue.500" fontSize="2em" />
            Python
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color="blue.500" fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color="blue.500" fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color="blue.500" fontSize="2em" />
            NodeJS
          </ListItem>
        </List>
        <Box>
          <Text
            as="button"
            variant="emphasis"
            fontSize="smaller"
            textAlign="left"
            onClick={onOpen}
          >
            Veja Minhas habilidades completo <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
