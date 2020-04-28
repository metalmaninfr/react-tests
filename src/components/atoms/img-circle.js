import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Circle = styled.div`
  display: -webkit-inline-box;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImgCircle = ({ src, alt }) => (
  <Circle data-testid="img-circle">
    <img src={src} alt={alt} width="70%" height="70%" />
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
