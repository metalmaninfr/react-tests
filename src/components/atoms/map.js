import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Map = styled.div`
  max-width: 60rem;
  width: 100%;
  height: 20rem;
  background-size: cover;
  background-position: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const MapBox = ({ url }) => (
    <Map data-testid="mapbox" style={{ backgroundImage: `url(${url})`}} />
);

MapBox.prototype = {
    url: PropTypes.string
}

MapBox.defaultProps = {
    src: "https://firebasestorage.googleapis.com/v0/b/alkportfolio-c8d26.appspot.com/o/map.png?alt=media&token=07bff724-b994-4597-a0cb-4c02ad2f34cd"
}

export default MapBox
