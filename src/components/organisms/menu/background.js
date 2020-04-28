import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Background = styled.div`
  height: 20rem;
  width: 100%;
  background: rgba(238, 167, 0, .7);
  display: flex;
  justify-content: center;
  align-items: center;
`

const BackgroundImg = ({ src, alt }) => (
  <Background data-testid="test-background">
    <img src={src} alt={alt} height="65%" width="45%" />
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
