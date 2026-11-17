import { Action, Container, Text, Visual } from '../atoms'
import { usePageColor } from '../../hooks/usePageColor'
import { SOCIAL_LINKS } from '../../assets/socials'

const Socials = () => {
  const color = usePageColor()

  return (
    <Container.Column
      alignSelf="stretch"
      padding="1.875rem 0"
      alignItems="center"
      gap="1.875rem"
      borderRadius="1.25rem"
      border={`6px solid ${color.dark}`}
    >
      <Text.Paragraph textAlign="center">
        Suivez-nous sur les réseaux !
      </Text.Paragraph>
      <Container.Row direction="row" gap="2.5rem">
        {SOCIAL_LINKS.map((social) => (
          <Action.Link key={social.name} to={social.url} target="_blank" rel="noopener noreferrer">
            <Visual.Image width="3.125rem" height="3.125rem" src={social.image} alt={social.name} loading="lazy" />
          </Action.Link>
        ))}
      </Container.Row>
    </Container.Column>
  )
}

export default Socials
