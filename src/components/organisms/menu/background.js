import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  height: 20rem;
  width: 100%;
  background: lightgrey;
`

const BackgroundImg = ({ src, alt }) => (
  <Background>
    <img src={src} alt={alt} height="100%" width="100%" />
  </Background>
);

BackgroundImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

BackgroundImg.defaultProps = {
  src: null,
  alt: null,
}

export default BackgroundImg;
