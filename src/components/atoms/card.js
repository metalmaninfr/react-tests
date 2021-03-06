import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

import Title from './title';


const StyledCard = styled.div`
  background: white;
  box-shadow: 1px 3px 37px -10px ${rgba('black', 0.75)};
  width: 100%;
  min-height: 10rem;
  padding: 1rem;
  line-height: 1.5;
  text-align: left;
  margin: 1rem 0;
`


const Card = ({ title, testid, children }) => (
  <StyledCard data-testid={testid}>
    <Title size="small"><p>{title}</p></Title>
    {children}
  </StyledCard>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
  ]).isRequired,
  testid: PropTypes.string,
};

Card.defaultProps = {
  testid: 'card-container',
}

export default Card;
