import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../atoms/menuLink';
import styled from 'styled-components';

const StyledMenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
`

const MenuGroup = ({Links}) => (
  <StyledMenuGroup>
    {Links.map(({ to, label }) => (
      <MenuLink to={to} label={label} />
    ))}
  </StyledMenuGroup>
);

MenuGroup.propTypes = {
  Links: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    label: PropTypes.string,
  })),
}

MenuGroup.defaultProps = {
  Links: [
    {to: '/', label: 'Home'},
    {to: '/about', label: 'About'},
    {to: '/contact', label: 'Contact'},
    {to: '/list-of-works', label: 'list of works'},
  ]
}

export default MenuGroup;
