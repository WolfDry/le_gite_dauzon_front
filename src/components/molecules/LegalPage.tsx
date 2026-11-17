import { ReactNode } from 'react'
import { Container, Text } from '../atoms'
import { cream, yellow } from '../../assets/color'
import HeroBanner from './HeroBanner'
import Footer from './Footer'

/** Gabarit des pages légales : bandeau, colonne de texte lisible, pied de page. */
export const LegalPage = ({ title, updated, children }: { title: string, updated: string, children: ReactNode }) => (
  <Container.Column maxWidth="100vw" background={cream}>
    <HeroBanner height="40vh" paddingTop="60px" text={title} />
    <Container.Column padding="3.75rem 6.25rem" mPadding="2.5rem 1.25rem" alignItems="center" alignSelf="stretch">
      <Container.Column maxWidth="50rem" width="100%" gap="2.5rem">
        {children}
        <P fontSize="0.875rem">{`Dernière mise à jour : ${updated}.`}</P>
      </Container.Column>
    </Container.Column>
    <Footer />
  </Container.Column>
)

export const Section = ({ title, children }: { title: string, children: ReactNode }) => (
  <Container.Column as="section" gap="0.75rem" alignSelf="stretch">
    <Text.Title as="h2" fontSize="1.625rem" textAlign="start">{title}</Text.Title>
    {children}
  </Container.Column>
)

/** Paragraphe sans limite de lignes (les paragraphes du site sont coupés à 10 lignes par défaut). */
export const P = ({ children, ...props }: { children: ReactNode, fontSize?: string }) => (
  <Text.Paragraph overflow="visible" lineHeight="1.5" {...props}>{children}</Text.Paragraph>
)

export const List = ({ children }: { children: ReactNode }) => (
  <Text.List margin="0" padding="0 0 0 1.25rem">{children}</Text.List>
)

export const Item = ({ children }: { children: ReactNode }) => (
  <Text.ListItem lineHeight="1.5">{children}</Text.ListItem>
)

/** Information à fournir par les propriétaires, surlignée pour ne pas être oubliée. */
export const ToComplete = ({ children }: { children: ReactNode }) => (
  <mark style={{ background: yellow, padding: '0 0.25rem' }}>{`[À compléter : `}{children}{`]`}</mark>
)

export const ExternalLink = ({ href, children }: { href: string, children: ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>{children}</a>
)
