import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';
import { Link } from 'react-router-dom';

const LinkStyled = styled(Link) <CssProps>`
  display: flex;
  align-items: center;
  gap:  ${(props) => props.gap ?? ""};
  background: ${(props) => props.background ?? "transparent"};
  padding: ${(props) => props.padding ?? ""};
  border-radius:${(props) => props.borderRadius ?? ""};
  color: ${(props) => props.color ?? dark};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize ?? "1.375rem"};
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
  text-decoration: none;
`;

export default LinkStyled