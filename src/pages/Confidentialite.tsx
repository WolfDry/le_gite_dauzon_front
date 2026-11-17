import { Link } from 'react-router'
import { ExternalLink, Item, LegalPage, List, P, Section, ToComplete } from '../components/molecules/LegalPage'
import ConsentSettings from '../components/molecules/ConsentSettings'
import { pageMeta } from '../seo'

export const meta = () => pageMeta({
  title: 'Politique de confidentialité',
  description: "Données personnelles collectées par le site du Gîte d'Auzon (demande de réservation, avis, contact), durées de conservation, contenus YouTube et Google Maps, et vos droits.",
  path: '/confidentialite',
})

const mail = <a href="mailto:legitedauzon@free.fr" style={{ color: 'inherit' }}>legitedauzon@free.fr</a>

const Confidentialite = () => (
  <LegalPage title="Politique de confidentialité" updated="17 novembre 2026">
    <Section title="Qui traite vos données ?">
      <P>
        {'Les données saisies sur ce site sont traitées par les exploitants du Gîte d\'Auzon (voir les '}
        <Link to="/mentions-legales" style={{ color: 'inherit' }}>mentions légales</Link>
        {'), seuls destinataires de ces informations. Pour toute question : '}{mail}{'.'}
      </P>
    </Section>

    <Section title="Demande de réservation">
      <List>
        <Item>Données : nom, adresse e-mail, téléphone, dates de séjour, nombre d'adultes, d'enfants et d'animaux, message facultatif.</Item>
        <Item>Usage : étudier votre demande, vous recontacter et, si vous confirmez, préparer votre séjour.</Item>
        <Item>Base légale : mesures précontractuelles prises à votre demande.</Item>
        <Item>
          {'Conservation : une demande sans suite est supprimée automatiquement 90 jours après la date de départ demandée, ou 90 jours après son refus. Si le séjour est confirmé, les données sont conservées '}
          <ToComplete>durée, par exemple « pendant 10 ans, durée de conservation des pièces comptables »</ToComplete>
          {'.'}
        </Item>
      </List>
    </Section>

    <Section title="Avis du livre d'or">
      <List>
        <Item>Données : nom tel que vous le saisissez, note, texte de l'avis et date.</Item>
        <Item>Usage : publier votre avis sur le site, après relecture. Le nom, la note et l'avis sont visibles de tous une fois publiés.</Item>
        <Item>Base légale : votre consentement, donné en envoyant l'avis.</Item>
        <Item>Conservation : tant que l'avis est publié. Vous pouvez demander sa suppression à tout moment.</Item>
      </List>
    </Section>

    <Section title="Formulaire de contact">
      <List>
        <Item>Données : nom, adresse e-mail et message.</Item>
        <Item>Usage : vous répondre. Le message est transmis par e-mail et n'est pas enregistré sur le site.</Item>
        <Item>Base légale : notre intérêt légitime à répondre aux personnes qui nous écrivent.</Item>
        <Item>Conservation : dans notre messagerie, le temps nécessaire au suivi de l'échange.</Item>
      </List>
    </Section>

    <Section title="Sécurité et lutte contre les abus">
      <P>
        Pour éviter les envois en masse, le serveur compte brièvement, en mémoire, les envois de formulaire par adresse IP.
        L'hébergeur conserve par ailleurs des journaux techniques de connexion pour une durée limitée.
      </P>
    </Section>

    <Section title="Prestataires">
      <P>Vos données ne sont ni vendues ni utilisées à des fins publicitaires. Elles transitent par les prestataires techniques suivants, qui agissent pour notre compte :</P>
      <List>
        <Item>Vercel (États-Unis) : hébergement du site et du serveur ;</Item>
        <Item><ToComplete>hébergeur de la base de données et pays</ToComplete> : stockage des demandes et des avis ;</Item>
        <Item>Mailgun <ToComplete>région d'envoi : Union européenne ou États-Unis</ToComplete> : envoi des e-mails de notification aux propriétaires ;</Item>
        <Item>Cloudinary : hébergement des images des idées de visite (aucune donnée personnelle).</Item>
      </List>
      <P>Les transferts hors de l'Union européenne sont encadrés par le cadre de protection des données UE–États-Unis ou par les clauses contractuelles types de la Commission européenne.</P>
    </Section>

    <Section title="Cookies et contenus externes">
      <P>
        Ce site ne dépose aucun cookie de mesure d'audience ni de publicité. Les polices de caractères sont hébergées sur le site lui-même.
      </P>
      <P>
        {'La vidéo de présentation (YouTube) et le plan d\'accès (Google Maps) ne sont chargés que si vous cliquez sur « Afficher ». Google peut alors déposer des cookies et collecter des données de navigation, selon sa '}
        <ExternalLink href="https://policies.google.com/privacy">politique de confidentialité</ExternalLink>
        {'. Si vous choisissez « Toujours afficher », ce choix est mémorisé dans votre navigateur (stockage local, sans cookie). Vous pouvez le retirer ici :'}
      </P>
      <ConsentSettings />
    </Section>

    <Section title="Vos droits">
      <P>
        {'Vous pouvez accéder à vos données, les faire rectifier ou effacer, vous opposer à leur traitement, en demander la limitation ou la portabilité, et retirer votre consentement à tout moment. Écrivez-nous à '}{mail}
        {' : nous répondons sous un mois.'}
      </P>
      <P>
        {'Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL ('}
        <ExternalLink href="https://www.cnil.fr/fr/plaintes">cnil.fr</ExternalLink>
        {').'}
      </P>
    </Section>
  </LegalPage>
)

export default Confidentialite
