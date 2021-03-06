import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';

// components
import ImgCircle from '../atoms/img-circle';
import Title from '../atoms/title';
import Label from '../atoms/label';

const StyledCard = styled.a`
  display: block;
  background: white;
  box-shadow: 1px 3px 37px -10px ${rgba('black', 0.75)};
  width: 100%;
  min-height: 10rem;
  line-height: 1.5;
  text-align: left;
  margin: 1rem 0;
  box-sizing: border-box;
  border-radius: .2rem;
  padding: 2rem 0;
  text-decoration: none;
  color: unset;
`

const CoverImage = styled.div`
  background: lightgrey;
  width: 100%;
  height: 16rem;
`

const StyledRow = styled(Row)`
  padding: .5rem 0 1.5rem;
`

const TextContent = styled.p`
  height: 12rem;
  overflow: scroll;
`;

const WorkCard = ({
  src,
  alt,
  coverImg,
  coverAlt,
  title,
  date,
  description,
  link
}) => (
  <StyledCard href={link} target="_blank">
    <Grid>
      <StyledRow start="xs" middle="xs">
        <Col xs={2}>
          <ImgCircle src={src} alt={alt} />
        </Col>
        <Col xs={10}>
          <Row>
            <Col xs={10}>
              <Title size="small"><span>{title}</span></Title>
            </Col>
            <Col xs={10}>
              <Label size="small"><span>{moment(date).format('DD-MM-YYYY')}</span></Label>
            </Col>
          </Row>
        </Col>
      </StyledRow>
    </Grid>
    <CoverImage>
      <img src={coverImg} alt={coverAlt} width="100%" height="100%" />
    </CoverImage>
    <Grid>
      <Col xs={12}>
        <TextContent>{description}</TextContent>
      </Col>
    </Grid>
  </StyledCard>
);

WorkCard.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  coverImg: PropTypes.string,
  coverAlt: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

WorkCard.defaultProps ={
  src: null,
  alt: null,
  coverimg: null,
  title: null,
  date: null,
  description: null,
  coverAlt: "cover",
  link: "#"
}
export default WorkCard;
