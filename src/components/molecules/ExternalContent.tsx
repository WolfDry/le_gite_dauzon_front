import { ReactNode, useState } from 'react'
import { Action, Container, Text } from '../atoms'
import { cream, dark, darkGreen, white } from '../../assets/color'
import { EXTERNAL_PROVIDERS, ExternalProvider, setConsent, useStoredConsent } from '../../lib/consent'

type Props = {
  provider: ExternalProvider
  width?: string
  height?: string
  /** Hauteur sur mobile. */
  mHeight?: string
  borderRadius?: string
  /** Le contenu tiers (iframe), rendu seulement après l'accord du visiteur. */
  children: ReactNode
}

/**
 * Contenu d'un site tiers (YouTube, Google Maps) chargé seulement après accord :
 * tant que le visiteur n'a pas cliqué, aucune requête ne part vers ce service.
 */
const ExternalContent = ({ provider, width = '100%', height = '100%', mHeight, borderRadius, children }: Props) => {
  const stored = useStoredConsent(provider)
  const [allowedOnce, setAllowedOnce] = useState(false)
  const { name, content, privacyUrl } = EXTERNAL_PROVIDERS[provider]

  if (stored || allowedOnce) return <>{children}</>

  return (
    <Container.Column width={width} height={height} mHeight={mHeight} padding="1.875rem" mPadding="1.25rem" justifyContent="center" alignItems="center" gap="1.25rem" borderRadius={borderRadius} background={cream} border={`1px solid ${dark}`}>
      <Text.Paragraph textAlign="center" overflow="visible">
        {`Ce contenu est hébergé par ${name}. En l'affichant, vous acceptez que ${name} dépose des cookies et collecte des données de navigation.`}
      </Text.Paragraph>
      <Container.Row justifyContent="center" alignItems="center" gap="10px">
        <Action.Button onClick={() => setAllowedOnce(true)} padding="0.5rem 1.25rem" borderRadius="6.25rem" background={darkGreen} color={white}>
          {`Afficher ${content}`}
        </Action.Button>
        <Action.Button onClick={() => setConsent(provider, true)} padding="0.5rem 1.25rem" borderRadius="6.25rem" background={white}>
          Toujours afficher
        </Action.Button>
      </Container.Row>
      <Text.Paragraph display="block" textAlign="center" fontSize="0.8125rem" overflow="visible">
        <a href={privacyUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{`Politique de confidentialité de ${name}`}</a>
      </Text.Paragraph>
    </Container.Column>
  )
}

export default ExternalContent
