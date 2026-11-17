import { Action, Container, Text } from '../atoms'
import { white } from '../../assets/color'
import { EXTERNAL_PROVIDERS, ExternalProvider, setConsent, useStoredConsent } from '../../lib/consent'

const ProviderSetting = ({ provider }: { provider: ExternalProvider }) => {
  const granted = useStoredConsent(provider)
  const { name } = EXTERNAL_PROVIDERS[provider]

  return (
    <Container.Row direction="row" justifyContent="space-between" alignItems="center" gap="1.25rem" alignSelf="stretch">
      <Text.Paragraph overflow="visible" role="status">
        {`${name} : ${granted ? 'toujours affiché' : 'affiché seulement à votre demande'}`}
      </Text.Paragraph>
      <Action.Button onClick={() => setConsent(provider, !granted)} padding="0.5rem 1.25rem" borderRadius="6.25rem" background={white} flexShrink="0">
        {granted ? 'Retirer mon accord' : 'Toujours afficher'}
      </Action.Button>
    </Container.Row>
  )
}

/** Choix mémorisés pour les contenus tiers, modifiables à tout moment. */
const ConsentSettings = () => (
  <Container.Column gap="0.75rem" alignSelf="stretch">
    {(Object.keys(EXTERNAL_PROVIDERS) as ExternalProvider[]).map((provider) => (
      <ProviderSetting key={provider} provider={provider} />
    ))}
  </Container.Column>
)

export default ConsentSettings
