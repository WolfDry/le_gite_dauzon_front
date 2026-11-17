import { Link } from 'react-router'
import { ExternalLink, Item, LegalPage, List, P, Section, ToComplete } from '../components/molecules/LegalPage'
import { pageMeta, SITE_URL } from '../seo'

export const meta = () => pageMeta({
  title: 'Mentions légales',
  description: "Mentions légales du site du Gîte d'Auzon, gîte à Joyeuse en Ardèche : éditeur, hébergeur, propriété intellectuelle.",
  path: '/mentions-legales',
})

const MentionsLegales = () => (
  <LegalPage title="Mentions légales" updated="17 novembre 2026">
    <Section title="Éditeur du site">
      <P>{`Le site ${SITE_URL.replace(/^https?:\/\//, '')} est édité par :`}</P>
      <List>
        <Item><ToComplete>nom et prénom des exploitants du gîte, ou raison sociale de la société</ToComplete></Item>
        <Item><ToComplete>statut, par exemple « loueurs en meublé non professionnels », ou forme juridique et capital de la société</ToComplete></Item>
        <Item>Adresse : 20 impasse du Petit Nice, 07260 Joyeuse <ToComplete>adresse de l'éditeur, si elle diffère de celle du gîte</ToComplete></Item>
        <Item>SIRET : <ToComplete>numéro SIRET, si vous en avez un</ToComplete></Item>
        <Item>E-mail : <a href="mailto:legitedauzon@free.fr" style={{ color: 'inherit' }}>legitedauzon@free.fr</a></Item>
        <Item>Téléphone : <a href="tel:+33610339906" style={{ color: 'inherit' }}>06 10 33 99 06</a></Item>
      </List>
      <P>Directeur ou directrice de la publication : <ToComplete>nom et prénom</ToComplete></P>
    </Section>

    <Section title="Hébergement">
      <P>
        {'Le site et son serveur sont hébergés par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis ('}
        <ExternalLink href="https://vercel.com">vercel.com</ExternalLink>
        {').'}
      </P>
      <P>Base de données : <ToComplete>nom et adresse de l'hébergeur de la base de données</ToComplete></P>
    </Section>

    <Section title="Propriété intellectuelle">
      <P>
        Les textes, photographies, vidéos et logos de ce site sont la propriété de l'éditeur, sauf mention contraire.
        Toute reproduction, totale ou partielle, sans autorisation écrite préalable est interdite.
      </P>
      <P>Crédits photographiques : <ToComplete>auteurs des photos qui ne sont pas les vôtres, le cas échéant</ToComplete></P>
    </Section>

    <Section title="Médiation de la consommation">
      <P>
        {'En cas de litige, après une réclamation écrite restée sans réponse satisfaisante, vous pouvez recourir gratuitement au médiateur de la consommation suivant : '}
        <ToComplete>nom, adresse et site internet du médiateur auquel vous adhérez</ToComplete>
      </P>
    </Section>

    <Section title="Données personnelles">
      <P>
        {'Les informations collectées par les formulaires du site et vos droits sur ces données sont décrits dans notre '}
        <Link to="/confidentialite" style={{ color: 'inherit' }}>politique de confidentialité</Link>
        {'.'}
      </P>
    </Section>
  </LegalPage>
)

export default MentionsLegales
