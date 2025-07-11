import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type'
import { dark } from '../../../assets/color';

const TitleStyled = styled.h1<CssProps>`
  align-self: stretch;
  text-align: ${(props) => props.textAlign ?? "center"};
  color: ${(props) => props.color ?? dark};
  font-family: ${(props) => props.fontFamily ?? "Handlee"};
  font-size: ${(props) => props.fontSize ?? "1.875rem"};
  font-style: ${(props) => props.fontStyle ?? "normal"};
  font-weight: ${(props) => props.fontWeight ?? "400"};
  line-height: ${(props) => props.lineHeight ?? "normal"};
  white-space: pre-line;

  
  @media (max-width: 1050px) {
    font-size: ${(props) => props.mFontSize ?? ''};
  }
`;

export default TitleStyled