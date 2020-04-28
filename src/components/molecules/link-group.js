import React from 'react';
import PropTypes from 'prop-types';
import MenuLink from '../atoms/menuLink';
import styled from 'styled-components';

const StyledMenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  font-family: Verdana, Geneva, sans-serif;
`

const MenuGroup = ({Links}) => (
  <StyledMenuGroup data-testid="link-group-container">
    {Links.map(({ to, label }) => (
      <MenuLink key={label} to={to} label={label} />
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
    {to: '/', label: 'Who am I'},
    {to: '/list-of-work', label: 'List of works'},
    {to: '/contact', label: 'Contact'}
  ]
}

export default MenuGroup;
