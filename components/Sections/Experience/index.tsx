import { memo } from 'react'
import { Heading, Text, Stack, } from '@chakra-ui/react'
import ExperienceTab from './ExperienceTab'
const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Lugares onde trabalhei.
    </Heading>
    <Text variant="description">
      Desde 2022, tive o privilégio de trabalhar com algumas empresas que me possibilitaram aprimorar minhas habilidades e talentos.
      Esta empresa sempre terá um lugar especial em meu coração.
      Atualmente, estou trabalhando como freelancer.
    </Text>
    <ExperienceTab />
  </Stack>
)

export default memo(DetailSection)
