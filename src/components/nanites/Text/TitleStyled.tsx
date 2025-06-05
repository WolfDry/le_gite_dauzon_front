import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const TitleStyled = styled.h1<CssProps>`
  align-self: stretch;
  text-align: ${(props) => props.textAlign ?? ""};
  color: ${(props) => props.color ?? ""};
  font-family: ${(props) => props.fontFamily ?? ""};
  font-size: ${(props) => props.fontSize ?? ""};
  font-style: ${(props) => props.fontStyle ?? ""};
  font-weight: ${(props) => props.fontWeight ?? ""};
  line-height: ${(props) => props.lineHeight ?? ""};
  white-space: pre-line;
`;

export default TitleStyled