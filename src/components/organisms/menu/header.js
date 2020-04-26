import styled from 'styled-components';
import { rgba } from 'polished';

const MenuHeader = styled.div`
  background: white;
  text-align: center;
  box-shadow: 0px 3px 5px ${rgba('black', 0.2)};
  padding: 2rem 0;
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.6rem;
`

export default MenuHeader;
