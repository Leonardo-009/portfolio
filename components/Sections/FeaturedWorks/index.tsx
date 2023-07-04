import { memo } from 'react'
import {
  Heading,
  Text,
  Stack,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import FeaturedCard from './FeaturedCard'
import { fadeInUpSlower, galleryStagger } from '@/config/animations'
import { mobileBreakpointsMap } from '@/config/theme'
const MotionGrid = motion(Grid)
const MotionGridItem = motion(GridItem)

const FeaturedWorksSection = () => {
  const isMobile = useBreakpointValue(mobileBreakpointsMap)
  return (
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
        Alguns dos meus Projetos.
      </Heading>
      <Text variant="description">
        Confira alguns dos projetos que fiz.
      </Text>

      <MotionGrid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(6, 1fr)"
        gap={{ base: 5, md: 6 }}
        variants={galleryStagger}
      >
        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={1}
            title="Reconhecimento de imagens"
            src="/works/projeto1.png"
            description="Reconhecimento de imagens é um projeto que visa desenvolver um sistema de reconhecimento de objetos em imagens utilizando técnicas de aprendizado de máquina. Neste projeto, utilizei Python e yolov8n. Se você quiser saber mais sobre o projeto e explorar o código-fonte, sinta-se à vontade para visitar o repositório no GitHub."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/Leonardo-009/reconhecimento-de-imagens"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>

        <MotionGridItem colSpan={6} variants={fadeInUpSlower}>
          <FeaturedCard
            idx={2}
            title="Duck chat"
            src="/works/projeto2.png"
            description="O Duck Chat é um Sistema de batepapo online onde é possível criar salas e interagir com outros usuários ao vivo através de websockets."
            height={{ base: '130px', md: '225px', '2xl': '300px' }}
            ctaUrl="https://github.com/Leonardo-009/duck-chat"
            objectPosition="right 20%"
            isMobile={isMobile}
          />
        </MotionGridItem>
      </MotionGrid>
    </Stack>
  )
}

export default memo(FeaturedWorksSection)
