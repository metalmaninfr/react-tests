
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
// App components
import Title from './components/atoms/title';
import Menu from './components/organisms/menu';
import MenuGroup from './components/molecules/link-group';
import MenuHeader from './components/organisms/menu/header';
import MenuBackground from './components/organisms/menu/background';
import Card from './components/atoms/card';
import Content from './components/layouts/content';
import WorkCard from './components/layouts/work-card';
import KonamiCode from './components/konami/konami';

const App = ({ location, works }) => {
  return (
    <>
      <KonamiCode />
      <MenuHeader>
        <Title size='large' data-testid="large-title">
          <span>{location.pathname !== "/" ? location.pathname.split('/')[1].split('-').join(' ') : 'Home'}</span>
        </Title>
      </MenuHeader>
      <MenuBackground />
      <Menu>
        <MenuGroup />
      </Menu>
      <Route exact path="/">
        <Content>
          <Grid fluid>
            <Row center="xs">
              <Col xs={10} md={8}>
                <Card title="Atef Kahlaoui">
                  <p>Alkpote, est un rappeur français d'origine tunisienne, né le 3 février 1981 dans le 10e arrondissement de Paris</p>
                  <p>
                    Il trouve son nom de scène (un calembour sous forme de mot-valise mélangeant le nom d'Al Capone et le mot capote) à l'âge de 15 ans, et intègre le groupe Unité 2 Feu en 1998, avec lequel il publie un premier album intitulé Haine, Misère Et Crasse. Il se détache peu à peu de son groupe afin de poursuivre une carrière solo. En novembre 2007, Alkpote publie l'album Sucez-moi avant L'album.
                    <br />
                    Durant sa carrière, Alkpote est souvent critiqué pour ses nombreuses références à la pornographie dans ses textes. Il s'en explique ainsi : On me dit souvent que je suis pornocrate c'est vrai. Mais je ne me sens pas plus pornocrate que Doc Gynéco, Alizée ou Mylène Farmer. On est artistes avant tout. Ce qui me nourrit c’est ma passion pour la rime, pas le porno. Tous les mots un peu durs que j'utilise dans mes textes, ça fait juste partie de mon personnage3.
                  </p>
                </Card>
              </Col>
            </Row>
            <Row between="xs">
              <Col xs={8} md={4}>
                <Card title="Jeunesse et débuts">
                  <p>
                    D'origine tunisienne, Atef Kahlaoui est né à Paris. Après une scolarité mouvementée, une conseillère d'orientation le dirige vers un cursus professionnel en plomberie, comme son père Salah Kahlaoui, au lycée Baudelaire d'Évry mais cette formation ne l'intéresse pas. La carrière musicale d'Atef Kahlaoui commence en 19952, après son emménagement dans le quartier des Pyramides à Évry. Il adopte le nom de scène Al K-Pote qu'il a trouvé sans chercher à l'âge de 15 ans. Il précise qu'Alkpote est comme un personnage, une sorte de double qui voulait juste sortir de ma tête. Une sorte de Gainsbarre.
                  </p>
                </Card>
              </Col>
              <Col xs={8} md={7}>
                <Card title="Carrière solo">
                  <p>
                  Il intègre en solo le label Néochrome en 2006. En avril 2007, il publie son projet Rap de banlieusard qui met à l'honneur cet artiste hors normes. Avec des rimes travaillées, un flow fluctuant et un sens des paroles qui s’inspire des rues sales de la cité des Pyramides, et d’une jeunesse déphasée1. En novembre 2007, Alkpote sort la mixtape Sucez-moi avant l'album1.
                  </p>
                  <p>
                    En 2010, la chanson Bande de putains, sur l'album Alkpote et la crème d'Ile 2 France, donne lieu à un conflit entre les partisans d'Alkpote et des opposants considérant le titre comme une exaltation des pires clichés du rap6. En 2011, il fait une apparition dans le film La Vengeance de Morsay, dans lequel il joue le coiffeur de la cité où ce dernier habite. Le 19 mars 2012, il publie son album L'Empereur contre-attaque7. L'album Neochrome Hall Stars Game, une collaboration avec Seth Gueko et Zekwé Ramos, est publié le 26 novembre de la même année. Le rappeur annonce également en 2012 qu'il envisage d'arrêter sa carrière, estimant ne pas avoir été suffisamment reconnu pour son talent4,8. Le 3 juin 2013, il publie sa digitape intitulée Mazter Chef Muzik Volume 13. En avril 2014, il publie sa mixtape Orgasmixtape, qui est suivi d'un deuxième volet l'année suivante, le 11 mai 20159,10.
                  </p>
                  <p>
                    En 2010, la chanson Bande de putains, sur l'album Alkpote et la crème d'Ile 2 France, donne lieu à un conflit entre les partisans d'Alkpote et des opposants considérant le titre comme une exaltation des pires clichés du rap6. En 2011, il fait une apparition dans le film La Vengeance de Morsay, dans lequel il joue le coiffeur de la cité où ce dernier habite. Le 19 mars 2012, il publie son album L'Empereur contre-attaque7. L'album Neochrome Hall Stars Game, une collaboration avec Seth Gueko et Zekwé Ramos, est publié le 26 novembre de la même année. Le rappeur annonce également en 2012 qu'il envisage d'arrêter sa carrière, estimant ne pas avoir été suffisamment reconnu pour son talent4,8. Le 3 juin 2013, il publie sa digitape intitulée Mazter Chef Muzik Volume 13. En avril 2014, il publie sa mixtape Orgasmixtape, qui est suivi d'un deuxième volet l'année suivante, le 11 mai 20159,10.
                  </p>
                  <p>
                    En 2015, il tourne le clip de la chanson Formule 1 dans un hôtel de Courcouronnes. Le clip est rapidement retiré de YouTube à la suite d'une plainte d'Accor pour portait préjudice à la marque11. En janvier 2016, il publie un album collaboratif intitulé Ténébreuse Musique avec Butter Bullets12. Le 24 juin paraît son album Sadisme et Perversion en compagnie de DJ Weedim. Le 7 juillet 2017, Alkpote sort un nouveau projet, Les Marches de l'empereur, toujours en compagnie de DJ Weedim, qui fait aussi participer Vald, Biffty, Iron Sy, la MZ, Black-D du XV Barbar, 13 Block, Leto du PSO Thug, Niska & La B, Brigistone, Jones Cruipy, Jarod, Tino, et Cinnamon pour le remix de Pyramides. Entre juin et juillet 2017, il assure les premières parties des concerts de Gucci Mane en France13.
                  </p>
                </Card>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Route>
      <Route path="/list-of-work">
        <Grid fluid>
          <Row between="xs">
            {works.map(({
              src,
              alt,
              coverImg,
              coverAlt,
              title,
              date,
              description,
            }) => (
              <Col xs={12} md={3}>
                <WorkCard
                  src={src}
                  alt={alt}
                  coverImg={coverImg}
                  coverAlt={coverAlt}
                  title={title}
                  date={date}
                  description={description}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </Route>
      <Route path="/Contact">
        <Title size='large' data-testId="small-title"><span>Contact</span></Title>
      </Route>
    </>
  );
}


App.defaultProps = {
  works: [
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
    {src: null, alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
  ],
}

export default withRouter(App);
