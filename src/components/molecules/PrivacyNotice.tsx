import { Link } from 'react-router'
import { Text } from '../atoms'

type Props = {
  /** Usage des données, à la suite de « servent uniquement à … ». */
  purpose: string
}

/** Information RGPD affichée sous chaque formulaire qui collecte des données personnelles. */
const PrivacyNotice = ({ purpose }: Props) => (
  <Text.Paragraph fontSize="0.8125rem" overflow="visible">
    {`Les informations saisies servent uniquement à ${purpose}. Elles ne sont ni revendues ni utilisées à des fins publicitaires. `}
    <Link to="/confidentialite" style={{ color: 'inherit' }}>Voir notre politique de confidentialité</Link>.
  </Text.Paragraph>
)

export default PrivacyNotice
