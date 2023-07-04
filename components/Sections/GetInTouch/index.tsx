import { memo } from 'react'
import { Heading, Text, Stack, Link, Icon, Box } from '@chakra-ui/react'
import { motion, Variants } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { RiHeartPulseFill, RiCopyleftLine, RiGithubFill } from 'react-icons/ri'

const rimuruVariant: Variants = {
  shake: {
    rotate: [0, 15, 0, -15, 0],
    transition: {
      delay: 1.2,
      duration: 0.5,
      repeat: 2,
      ease: 'easeInOut',
    },
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      delay: 1.8,
      duration: 0.5,
      repeat: 3,
      ease: 'easeInOut',
    },
  },
}

const GetInTouch = () => {
  const [ref, inView] = useInView()
  return (
    <Stack
      width={{ base: '99%', lg: '60%', xl: '75%' }}
      height="100%"
      spacing={{ base: 6, xl: 8 }}
      as="footer"
    >
      <Heading
        size="2xl"
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        Olá!{' '}
        <Text as="span" fontSize="2xl" variant="emphasis" color="#45aaf2">
          <motion.div
            style={{ display: 'inline-block' }}
            variants={rimuruVariant}
            ref={ref}
            animate={inView ? ['shake', 'jump'] : false}
          >
            ヽ(•‿•)ノ
          </motion.div>
        </Text>
      </Heading>
      <Text variant="description">
        Sou um freelancer com uma paixão pela programação e uma personalidade naturalmente introvertida. No entanto, não deixe isso te enganar! Estou mais do que animado para me envolver em conversas significativas e responder às suas mensagens.<br /><br />
        Seja qual for a sua necessidade - seja um projeto de programação, suporte técnico, consultoria ou até mesmo uma conversa descontraída sobre filmes, cultura otaku ou qualquer assunto interessante - estou aqui para ajudar.<br /><br />
        Fique à vontade para entrar em contato comigo através das minhas redes sociais ou por qualquer meio de comunicação de sua preferência.
        Estou ansioso para trocar ideias, compartilhar conhecimento e colaborar em projetos emocionantes!<br />

        <Link
          href="leonardoapelanda@gmail.com"
          target="_blank"
          rel="noreferrer"
          color="#45aaf2"
        >
          email
        </Link>
        . <br /><br />
        Agradeço antecipadamente por sua mensagem e estou pronto para embarcar nesta jornada de trabalho e criatividade junto com você!<br />
      </Text>

      <Box
        textAlign="center"
        fontFamily="monospace"
        paddingTop={{ base: 10, lg: 20, xl: 20 }}
        paddingBottom={{ base: 5, lg: 18 }}
        marginTop={2}
        marginBottom={2}
      >
        <Link
          variant="description"
          textDecoration="none"
          rel="noreferrer"
          href="https://https://github.com/Leonardo-009"
          target="_blank"
          _focus={{ boxShadow: 'none' }}
        >
          <Text as="span">
            <Icon as={RiGithubFill} h={6} w={6} /> <br />
            Projetado e feito com <Icon as={RiHeartPulseFill} /> <br />
            Leonardo Pelanda <Icon as={RiCopyleftLine} /> 2023
          </Text>
        </Link>
      </Box>
    </Stack>
  )
}

export default memo(GetInTouch)
