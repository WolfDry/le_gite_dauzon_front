import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { black } from '../../../assets/color';

const ParagraphStyled = styled.p<CssProps>`
  color: ${black};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize ?? ''};
  font-style: ${(props) => props.fontStyle ?? ''};
  font-weight: ${(props) => props.fontWeight ?? ''};
  line-height: ${(props) => props.lineHeight ?? ''};
  border: ${(props) => props.border ?? ''};
  border-left: ${(props) => props.borderLeft ?? ''};
  border-rigth: ${(props) => props.borderRight ?? ''};
  white-space: pre-line;  
  flex: ${(props) => props.flex ?? ''};
`;

export default ParagraphStyled