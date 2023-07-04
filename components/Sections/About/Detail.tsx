import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  Icon,
  SimpleGrid,
  Box,
  Tooltip,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiDocker,
} from 'react-icons/si'
import { IoMdOpen, IoIosCafe } from 'react-icons/io'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
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
        Meu nome é Leonardo Pelanda, tenho 27 anos e possuo uma paixão pela cultura DevOps, DevSecOps e pelas boas práticas de segurança da informação.<br/><br/>
        Eu irei concluir minha graduação em Análise e Desenvolvimento de Sistemas em 2023. Além disso, possuo uma paixão e entusiasmo pela tecnologia da informação e pela cultura DevOps.<br/><br/>
        Durante um período de {professionalYears} anos, tenho dedicado meu tempo ao estudo e aprimoramento de um amplo conjunto de tecnologias, pelas quais desenvolvi um profundo apreço.
        No momento, exerço minha atividade profissional como freelancer nessa área, sempre em busca de novos desafios que me permitam expandir ainda mais minhas habilidades e conhecimentos.
        <br /> <br />
        Vamos explorar algumas das tecnologias com as quais tenho experiência? Então, prepare-se para descobrir algumas das habilidades que possuo. aqui um {' '}
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
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            JavaScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            TypeScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodedotjs} color={emphasis} fontSize="2em" />
            Node
          </ListItem>
        </List>
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextdotjs} color={emphasis} fontSize="2em" />
            NextJS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
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
