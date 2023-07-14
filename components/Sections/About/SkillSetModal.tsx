/* eslint-disable react/no-multi-comp */
import {
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react'
import styles from './styles.module.css'
import { Skill, Skills, splitSkills } from '@/config/skills'

type ISkillSetModal = {
  isOpen: boolean
  onClose(): void
}

const SkillList = ({
  title,
  columns,
}: {
  title: string
  columns: Skill[][]
}) => {
  const emphasis = useColorModeValue('teal.500', 'cyan.200')
  const [colOne, colTwo = []] = columns
  return (
    <>
      <Heading as="div" size="sm" paddingBottom={1} variant="description">
        {title}
      </Heading>
      <Divider marginBottom={4} />
      <SimpleGrid columns={2} spacing={4} paddingBottom={6}>
        <List spacing={3}>
          {colOne.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon as React.ElementType} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
        <List spacing={3}>
          {colTwo.map((item) => (
            <ListItem
              key={item.name}
              fontSize="small"
              display="flex"
              alignItems="center"
            >
              <ListIcon as={item.icon as React.ElementType} color={emphasis} fontSize="2em" />
              {item.name}
            </ListItem>
          ))}
        </List>
      </SimpleGrid>
    </>
  )
}
const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const SegurançaDaInformação = splitSkills(Skills.SegurançaDaInformação)
  const cloud = splitSkills(Skills.cloud)
  const DevOps = splitSkills(Skills.DevOps)
  const dataBaseCols = splitSkills(Skills.database)
  const Developer  = splitSkills(Skills.Developer )
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Conjunto De Habilidades</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal} >
          <SkillList title="Segurança da informação" columns={SegurançaDaInformação} />
          <SkillList title="Developer " columns={Developer } />
          <SkillList title="DevOps" columns={DevOps} />
          <SkillList title="cloud" columns={cloud} />
          <SkillList title="Banco de dados" columns={dataBaseCols} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SkillSetModal
