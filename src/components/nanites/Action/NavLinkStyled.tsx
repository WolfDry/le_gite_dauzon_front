import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';
import { NavLink } from 'react-router-dom';

const NavLinkStyled = styled(NavLink) <CssProps>`
  color: ${(props) => props.color ?? dark};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize ?? "1.375rem"};
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
  text-decoration: none;

  &.active {
    font-weight: 700;
  }
`;

export default NavLinkStyled