import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  padding: 2rem 2rem;
  border: 1px solid black;
  width: 100%;
  text-decoration: none;
  color: black;
  box-sizing: border-box;
  &.active {
    color: red;
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
