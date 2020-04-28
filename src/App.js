
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
import ImgCircle from './components/atoms/img-circle';
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
      <MenuBackground src="https://cdn.shopify.com/s/files/1/0042/4207/9814/files/Logo_New_600x.png?v=1537871861" />
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
              link
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
                  link={link}
                />
              </Col>
            ))}
          </Row>
        </Grid>
      </Route>
      <Route path="/Contact">
        <Content>
          <Grid>
            <Row center="xs">
              <Col xs={10} md={8}>
                <Card title="Suivez Alkpote sur les réseaux sociaux: ">
                  <br /><br />
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <a href="https://twitter.com/AlkpoteLeVrai" target="_blank" rel="noopener noreferrer">
                      <ImgCircle
                        src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png"
                        alt="twitter"
                      />
                    </a>
                    <a style={{margin: "0 30px"}} href="https://www.instagram.com/alkpote/" target="_blank" rel="noopener noreferrer">
                      <ImgCircle
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png"
                        alt="instagram"
                      />
                    </a>
                    <a href="https://www.youtube.com/channel/UC5eyo1DYNuDKkIExfXKeGIg" target="_blank" rel="noopener noreferrer">
                      <ImgCircle
                        src="https://festival-roc-castel.eu/wp-content/uploads/sites/21/2019/04/logo-youtube-png-rond-2.png"
                        alt="youtube"
                      />
                    </a>
                  </div>
                  <br /><br />
                </Card>
              </Col>
            </Row>
          </Grid>
        </Content>
      </Route>
    </>
  );
}


App.defaultProps = {
  works: [
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/bd0763117f29f351569757e8c1c33ee6.1000x1000x1.jpg", 
      coverAlt: "Album Monument", 
      title: 'Monument', 
      date: "2019-11-08", 
      description: 'Respecté par les tauliers historiques et adulé par les stars de la nouvelle école, Alkpote, personnage vulgaire et outrageux doublé d’un rappeur aux qualités techniques phénoménales, est aujourd’hui considéré comme une véritable légende vivante du rap français.Après Amour en featuring avec Katerine et Nautilus en featuring avec Kaaris, Alkpote revient avec son tout nouvel album : MONUMENT.', 
      link: "https://www.fnac.com/a13864179/Alkpote-Monument-CD-album"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/b9771c6b245ed2581e6968ac3b92ddf8.600x600x1.jpg", 
      coverAlt: "Album Inferno", 
      title: 'Inferno', 
      date: "2018-04-27",
      description: "Après le succès de l’album Sadisme et Perversion en 2016, sur lequel Alkpote délivrait enfin à son public un projet entièrement solo, sans le moindre featuring, puis de la série de clips Les Marches de L’Empereur Saison 2 en 2017, Alkpote entame l’année 2018 sur la même cadence de stakhanoviste : d’une part, la troisième saison des Marches de l’Empereur explose les compteurs, avec déjà 3 millions de vues pour le premier épisode ; et d’autre part, un nouvel album solo vient asseoir définitivement son statut de rappeur le plus influent de sa génération.",
      link: "https://www.fnac.com/a11855117/Alkpote-Inferno-CD-album"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/5dcf18c43d61691fc8e1ed7bd7c17e6c.1000x1000x1.jpg", 
      coverAlt: "Album Les marches de l'empereur", 
      title: 'Les marches de l\'empereur', 
      date: "2017-07-07", 
      description: 'ALKPOTE est un véritable personnage à part entière du rap français. Maître des rimes multi syllabiques, roi des néologismes, expert en vulgarités et placements inattendus, il s’est toujours facilement distingué des autres rappeurs. Présent depuis plus d’une dizaine d’années, il a franchi un cap l’année dernière en sortant son album « Sadisme et perversion », entièrement produit par DJ Weedim (notamment DJ de Vald). Proche de Seth Gueko et Vald, dont Vald a toujours évoqué l’influence, Alkpote a rappé avec (presque) tout le rap français et est régulièrement cité comme l’un des MCs les plus techniques. Une étude sérieuse de Shakedatass à la fin de l’année 2014 plaçait d’ailleurs Alkpote à côté d’un certain MC Solaar au top du classement des rappeurs utilisant le plus de vocabulaire. Le concept des Marches de l’Empereur, clip filmé avec à chaque fois un ou plusieurs guests, l’a propulsé sur le devant de la scène. Un album qui comblera les fans qui ont suivi la montée des Marches de l’Empereur sur Youtube et cela en attendant la sortie d’un nouvel album à la fin de l’année',
      link: "https://www.fnac.com/a10685211/Alkpote-Les-Marches-de-L-Empereur-CD-album"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/4541dcb3da1ce05cd2e9322f906ddea0.1000x1000x1.jpg", 
      coverAlt: "Album Sadisme et perversion", 
      title: 'Sadisme et perversion', 
      date: "2016-06-24", 
      description: 'ALKPOTE est certainement l’une des figures les plus révérées du rap français. Son style et ses textes sont toujours sans retenue, débordants d’insanités mises en forme avec génie. Père d’un style ayant influencé des artistes comme Vald qui n’hésite pas à le citer en référence, ce n’est pas pour rien qu’ALKPOTE a été rebaptisé « L’empereur » par ses fans. ALKPOTE revient avec un nouvel album grossier et brillant à la fois. L’album a été entièrement réalisé et produit par DJ WEEDIM qui n’est autre que le DJ de Vald et de Seth Gueko. Le style de DJ WEEDIM reflète ce qui se fait de plus actuel en manière de rap. Le résultat déborde d’énergie et de démesure. DJ WEEDIM est également le DJ de OKLM Radio, la radio sur smartphone lancée par Booba déjà suivie par plus de 1 million de personne à date. Le programme musical de cette connexion ALKPOTE & DJ WEEDIMest annoncé sans détour dans le titre : Sadisme et perversion.',
      link: "https://www.fnac.com/a9715739/Alkpote-Dj-Weedim-Sadisme-et-Perversion-CD-album"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/49d4b28f8c6e29e2a4ad5fa81f7d06a2.843x843x1.jpg", 
      coverAlt: "Album Ténébreuse musique", 
      title: 'Ténébreuse musique', 
      date: "2016-01-20", 
      description: "L’aigle de Carthage, l’Empereur de la crasserie, Jonathan H, Serge Gainzbeur… derrière tous ces A.k.a vous aurez reconnu Alkpote. Qui depuis 2005 nous délivre un rap bien particulier : sale, grotesque, vulgaire à souhait, bourré de références télévisuelles et quotidiennes, le tout servi avec un flow unique reconnaissable entre mille. Idolâtré par beaucoup d'auditeurs, incompris par tant d'autres, le rap d'alkpote est déroutant, violent et outrancier",
      link: "https://www.kisskissbankbank.com/fr/projects/tenebreuse-musique--2"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/8ea25d5cd73661a1d8be7996d145c075.1000x1000x1.jpg", 
      coverAlt: "Album Orgasmixtape 2", 
      title: 'L\'Orgasmixtape, Vol. 2', 
      date: "2015-05-11", 
      description: 'La toute nouvelle mixtape d\'ALKPOTE ! 17 Titres inédits featuring Seth Gueko - Sadek - Vald - Nubi - Joe Lucazz - Infinit - Eloquence - Rcp. Sur des productions de Butter Bullets, Dj Weedim.',
      link: "https://www.fnac.com/a8242380/Alkpote-Orgasmixtape-2-CD-album"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/dde0b81fcc75c774d4906d1c1f1fd3f5.1000x1000x1.jpg", 
      coverAlt: "Album Orgasmixtape", 
      title: 'L\'Orgasmixtape', 
      date: "2014-04-07", 
      description: 'AlKpote, artiste le plus proléfique de sa génération, réveille tous vos sens le 07 Avril avec un nouveau projet "l\'OrgasMixtape" de 17 titres aux côtés de Niro, 1995 (Nekfeu, Alpha Wann...), Zekwé, 25G, Aketo (Sniper)... Rappeur français unique en son genre de par son style baroque, "l\'Empereur de la crasserie" reste fidèle à lui-même, partageant ses textes crus, odieux et sans équivoque offrant ainsi aux auditeurs les moins timides un bond dans un univers sombre et scabreux. AlKpote, maître de la "vulgarité artistique", déborde d\'ingéniosité : malgré les apparences d\'une dépravation insensée, un réel message est a décoder derrière chaque ligne violente et choquante. Ecoutez, vous atteindrez "l\'Orgasm...ixtape" !',
      link: "https://www.fnac.com/a7055481/Alkpote-Orgasmixtape-CD-album"
    },
    {
      src: "https://image.flaticon.com/icons/svg/2823/2823048.svg", 
      alt: "icone", 
      coverImg: "https://images.genius.com/b61a437bcf35711d8f333620147febd4.600x600x1.jpg", 
      coverAlt: "Album Neochrome hall stars game", 
      title: 'Neochrome hall stars game', 
      date: "2012-11-26", 
      description: "Neochrome Hall Stars, c'est la réunion de Seth Gueko, Alkpote et Zekwe Ramos, tout trois issu du label Neochrome. A l'automne 2012, vous pourrez retrouver l'album baptisé du meme nom Neochrome Hall Stars \"Game\".",
      link: "https://www.fnac.com/a4920852/Seth-Gueko-Neochrome-hall-stars-game-CD-album"
    },
    // {src: null , alt: null, coverImg: null, coverAlt: null, title: 'Groupe 420', date: "2020-04-20", description: 'Alex, Yasin, Mael, Clément'},
  ],
}

export default withRouter(App);
