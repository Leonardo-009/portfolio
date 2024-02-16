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
import { IoMdOpen, IoIosCafe } from 'react-icons/io'

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
        Meu nome é Leonardo De Alencar Pelanda, tenho 27 anos e sou apaixonado pela Cybersecurity.<br/><br/>
        Sou formado em Análise e Desenvolvimento de Sistemas Além disso comecei uma nova jornada em Sistemas de Informação e uma MBA-PÓS em Seguranca Da Informação, Tenho grande entusiasmo e interesse pela Tecnologia.<br/><br/>
        Ao longo dos últimos {professionalYears} anos,  tenho me dedicado ao estudo e aprimoramento de um amplo conjunto de tecnologias, o que me proporcionou um crecimento de conhecimento na área de Cybersecurity. Atualmente, estou envolvido em estudos de cibersegurança, utilizando as plataformas TryHackMe, PortSwigger e Hack The Box. Além disso, participo do programa de estudos do governo Hackers do Bem.<br /> <br />
        Vamos explorar algumas dos conhecimentos que possuo? Então, prepare-se para descobrir algumas das minhas habilidades, você gostaria de um {' '}
        <Tooltip
          label="Um cafézinho?"
          aria-label="Eu Amo Café!"
          hasArrow
        >
          <Text as="span" variant="emphasis" color="#45aaf2">
            Café?
          </Text>
        </Tooltip>{' '}
        <Icon as={IoIosCafe} />.
      </Text>

      <SimpleGrid columns={2} spacing={4} >
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
          Penetration Testing
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          Security Controls
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          Web Application Security
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          Social Engineering
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          Vulnerability Assessment
          </ListItem>
        </List>

        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
          DevOps
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          DevSecOps
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
          OWASP
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
            Lista de conhecimento de ferramentas de Cybersecurity <Icon as={IoMdOpen} />
          </Text>
        </Box>
      </SimpleGrid>
    </Stack>
  )
}

export default memo(Detail)
