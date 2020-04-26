import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished';

const StyledLink = styled(Link)`
  text-align: center;
  padding: 2rem 2rem;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: ${rgba('white', .5)};
  box-sizing: border-box;
  box-shadow: 0 0 2px ${rgba('black', 0.2)};
  &.active {
    color: white;
    border: 3px solid transparent;
    border-bottom-color: white;
  }
`

const NavLink = ({to, label}) => (
  <StyledLink
    data-testid="link"
    exact
    to={to}
    activeClassName="active"
  >
      {label}
  </StyledLink>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  label:PropTypes.string.isRequired
};

export default NavLink;
