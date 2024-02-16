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
  Spinner, // Import Spinner from Chakra UI
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
  const [colOne, colTwo = []] = columns;
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
  );
};

const SkillSetModal = ({ isOpen, onClose }: ISkillSetModal) => {
  const Reconhecimento = splitSkills(Skills.Reconhecimento);
  const ModelagemDeAmeaças = splitSkills(Skills.ModelagemDeAmeaças);
  const AnáliseDeVulnerabilidade = splitSkills(Skills.AnáliseDeVulnerabilidade);
  const Exploração = splitSkills(Skills.Exploração);
  const PósExploração = splitSkills(Skills.Pós_Exploração);
  const SAST = splitSkills(Skills.SAST);
  const DAST = splitSkills(Skills.DAST);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Skill</ModalHeader>
        <ModalCloseButton />
        <ModalBody className={styles.skillModal}>
          <SkillList title="Reconhecimento em evolução...⚙️" columns={Reconhecimento} />
          <SkillList title="Modelagem de ameaças em evolução...⚙️" columns={ModelagemDeAmeaças} />
          <SkillList title="Análise de Vulnerabilidade em evolução...⚙️" columns={AnáliseDeVulnerabilidade} />
          <SkillList title="Exploração em evolução...⚙️" columns={Exploração} />
          <SkillList title="Pós-exploração em evolução...⚙️" columns={PósExploração} />
          <SkillList title="Static Application Security Testing (SAST) em evolução...⚙️" columns={SAST} />
          <SkillList title="Dynamic Application Security Testing (DAST) em evolução...⚙️" columns={DAST} />
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="teal.500"
            size="xl"
            label="Loading..."
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SkillSetModal;
