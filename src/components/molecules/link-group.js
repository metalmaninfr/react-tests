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
    {to: '/', label: 'Home'},
    {to: '/list-of-work', label: 'List of works'},
    {to: '/contact', label: 'Contact'}
  ]
}

export default MenuGroup;
