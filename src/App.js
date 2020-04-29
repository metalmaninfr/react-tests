
import React, { useState, useEffect} from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
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
import ImgCircle from './components/atoms/img-circle';
import MapBox from './components/atoms/map';


const App = ({ location, works }) => {
  const [homeContent, setHomeContent] = useState([]);
  const [worksContent, setWorksContent] = useState([]);
  const [contactContent, setContactContent] = useState([]);
  const [loadHome, setLoadHome] = useState(false);
  const [loadWorks, setLoadWorks] = useState(false);
  const [loadContact, setLoadContact] = useState(false);

  useEffect(() => {
    axios.get('https://alkportfolio-c8d26.firebaseio.com/home.json')
      .then(res => {
        setHomeContent(res.data);
        setLoadHome(true);
    })
    axios.get('https://alkportfolio-c8d26.firebaseio.com/works.json')
      .then(res => {
        setWorksContent(res.data);
        setLoadWorks(true);
    })
    axios.get('https://alkportfolio-c8d26.firebaseio.com/contact.json')
      .then(res => {
        setContactContent(res.data);
        setLoadContact(true);
    })
  }, []);

  if(loadHome && loadWorks && loadContact) {
    return (
      <>
        <KonamiCode />
        <MenuHeader>
          <Title size='large' data-testid="large-title">
            <span>{location.pathname !== "/" ? location.pathname.split('/')[1].split('-').join(' ') : 'Home'}</span>
          </Title>
        </MenuHeader>
        <MenuBackground src={homeContent.background} />
        <Menu>
          <MenuGroup />
        </Menu>
        <Route exact path="/">
          <Content>
            <Grid fluid>
              <Row center="xs">
                <Col xs={10} md={8}>
                  <Card title={homeContent.one.title}>
                    <p>{homeContent.one.p1}</p>
                    <p>{homeContent.one.p2}</p>
                    <p>{homeContent.one.p3}</p>
                  </Card>
                </Col>
              </Row>
              <Row between="xs">
                <Col xs={8} md={4}>
                  <Card title={homeContent.two.title}>
                  <p>{homeContent.two.p1}</p>
                  </Card>
                </Col>
                <Col xs={8} md={7}>
                  <Card title={homeContent.three.title}>
                    <p>{homeContent.three.p1}</p>
                    <p>{homeContent.three.p2}</p>
                    <p>{homeContent.three.p3}</p>
                  </Card>
                </Col>
              </Row>
            </Grid>
          </Content>
        </Route>
        <Route path="/list-of-work">
          <Grid fluid>
            <Row between="xs">
              {worksContent.map(({
                src,
                alt,
                coverImg,
                coverAlt,
                title,
                date,
                description,
                link
              }, index) => (
                <Col xs={12} md={3} key={index}>
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
                <Card title={contactContent.title}>
                  <br /><br />
                  <div style={{display: "flex", justifyContent: "center"}}>
                    <a href={contactContent.twitter.link} target="_blank" rel="noopener noreferrer">
                      <ImgCircle
                        src={contactContent.twitter.img.src}
                        alt={contactContent.twitter.img.alt}
                      />
                    </a>
                    <a style={{margin: "0 30px"}} href={contactContent.instagram.link} target="_blank" rel="noopener noreferrer">
                      <ImgCircle
                        src={contactContent.instagram.img.src}
                        alt={contactContent.twitter.img.alt}
                      />
                    </a>
                    <a href={contactContent.youtube.link} target="_blank" rel="noopener noreferrer">
                      <ImgCircle
                        src={contactContent.youtube.img.src}
                        alt={contactContent.youtube.img.alt}
                      />
                    </a>
                  </div>
                  <br /><br />
                </Card>

                <Title><span>{contactContent.mapTitle}</span></Title>

                <MapBox style={{ backgroundImage: `url(${contactContent.mapSrc})`}} />
              </Col>
            </Row>
          </Grid>
        </Content>
      </Route>
      </>
    );
  } else {
    return (
      <>
        <KonamiCode />
        <MenuHeader>
          <Title size='large' data-testid="large-title">
            <span>{location.pathname !== "/" ? location.pathname.split('/')[1].split('-').join(' ') : 'Home'}</span>
          </Title>
        </MenuHeader>
        <MenuBackground src="https://firebasestorage.googleapis.com/v0/b/alkportfolio-c8d26.appspot.com/o/background.png?alt=media&token=f01112c2-580a-4f68-8f7f-0fa31606f943" />
        <Menu>
          <MenuGroup />
        </Menu>
      </>
    )
  }
}

export default withRouter(App);
