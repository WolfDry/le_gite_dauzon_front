import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const ParagraphStyled = styled.p<CssProps>`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  color: ${dark};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize ?? '1rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  font-weight: ${(props) => props.fontWeight ?? '400'};
  line-height: ${(props) => props.lineHeight ?? 'normal'};
  margin: 0;
  border: ${(props) => props.border ?? ''};
  border-left: ${(props) => props.borderLeft ?? ''};
  border-rigth: ${(props) => props.borderRight ?? ''};
  white-space: pre-line;  
  flex: ${(props) => props.flex ?? ''};
`;

export default ParagraphStyled