import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Circle = styled.div`
  display: -webkit-inline-box;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  background: lightgrey;
`

const ImgCircle = ({ src, alt }) => (
  <Circle data-testid="img-circle">
    <img src={src} alt={alt} width="100%" height="100%" />
  </Circle>
);

ImgCircle.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

ImgCircle.defaultProps = {
  src: null,
  alt: null,
}

export default ImgCircle
