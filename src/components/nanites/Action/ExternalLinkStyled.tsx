import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const ExternalLinkStyled = styled.a<CssProps>`
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
  text-align: center;
  
  @media (max-width: 1050px) {
    display: initial;
    border-radius: ${(props) => props.mBorderRadius ?? ""};
  }
`;

export default ExternalLinkStyled