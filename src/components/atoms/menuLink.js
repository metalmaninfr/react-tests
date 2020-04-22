import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
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

const MenuLink = ({to, label}) => (
  <StyledLink exact to={to} activeClassName="active">{label}</StyledLink>
);

MenuLink.propTypes = {
  to: PropTypes.string.isRequired,
  label:PropTypes.string.isRequired
};

export default MenuLink;
