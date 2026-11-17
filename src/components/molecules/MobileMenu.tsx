import { Action, Container, Visual } from '../atoms'
import { white } from '../../assets/color'
import { SOCIAL_LINKS } from '../../assets/socials'

type Props = {
  changeDisplayMenu: () => void
}

const MobileMenu = ({ changeDisplayMenu }: Props) => {
  return (
    <Container.Column width="100vw" height="100vh" padding="50px 30px" alignItems="flex-start" gap="30px" position="absolute" background="rgba(46, 107, 69, 0.80)" mBackdropFilter="blur(7.5px)" zIndex="99">
      <Container.Row onClick={() => changeDisplayMenu()} direction="row" justifyContent="flex-end" alignItems="center" alignSelf="stretch" cursor="pointer">
        <Visual.Svg label="close" />
      </Container.Row>
      <Container.Column alignItems="flex-start" gap="20px" flex="1 0 0" alignSelf="stretch">
        <Action.Link to={"/gite"} color={white}>
          Le gîte
        </Action.Link>
        <Action.Link to={"/reservation"} color={white}>
          Disponibilité
        </Action.Link>
        <Action.Link to={"/visite"} color={white}>
          À visiter
        </Action.Link>
        <Action.Link to={"/acces"} color={white}>
          Accès
        </Action.Link>
        <Action.Link to={"/commentaire"} color={white}>
          Livre d'or
        </Action.Link>
      </Container.Column>
      <Container.Row direction="row" alignItems="flex-start" gap="20px">
        {SOCIAL_LINKS.map((social) => (
          <Action.Link key={social.name} to={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
            <Visual.Svg label={social.svg} fill={white} />
          </Action.Link>
        ))}
      </Container.Row>
    </Container.Column >
  )
}

export default MobileMenu