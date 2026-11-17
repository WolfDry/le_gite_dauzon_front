import { Link } from 'react-router'
import { Container, Text } from '../atoms'

const linkStyle = { color: 'inherit' }

/** Bandeau du bas de page : liens légaux et copyright. */
const LegalBar = () => (
  <Container.Row
    height="5rem"
    mHeight="auto"
    padding="10px 8.3vw"
    mPadding="40px 30px"
    justifyContent="space-between"
    mJustifyContent="center"
    alignItems="center"
    alignSelf="stretch"
    mGap="30px"
  >
    <Container.Row direction="row" gap="1.25rem" justifyContent="center">
      <Text.Paragraph>
        <Link to="/mentions-legales" style={linkStyle}>Mentions légales</Link>
      </Text.Paragraph>
      <Text.Paragraph>
        <Link to="/confidentialite" style={linkStyle}>Confidentialité</Link>
      </Text.Paragraph>
    </Container.Row>
    {/* L'année est celle du navigateur ; elle peut différer de celle du build. */}
    <Text.Paragraph textAlign="center" suppressHydrationWarning>
      {`Copyright © ${new Date().getFullYear()} Le Gîte d’Auzon. Tous droits réservés.`}
    </Text.Paragraph>
  </Container.Row>
)

export default LegalBar
