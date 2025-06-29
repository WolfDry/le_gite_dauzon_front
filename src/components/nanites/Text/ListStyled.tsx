import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const ListStyled = styled.ul<CssProps>`
  display: ${(props) => props.display ?? ''};
  align-self: ${(props) => props.alignSelf ?? 'stretch'};
  color: ${(props) => props.color ?? dark};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize ?? '1rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  font-weight: ${(props) => props.fontWeight ?? '400'};
  line-height: ${(props) => props.lineHeight ?? 'normal'};
  text-align: ${(props) => props.textAlign ?? ''};
  margin: ${(props) => props.margin ?? ''};
  padding: ${(props) => props.padding ?? ''};
  border: ${(props) => props.border ?? ''};
  border-left: ${(props) => props.borderLeft ?? ''};
  border-rigth: ${(props) => props.borderRight ?? ''};
  flex: ${(props) => props.flex ?? ''};
  cursor: ${(props) => props.cursor ?? ''};
  z-index: ${(props) => props.zIndex ?? ''};
  list-style-type: disc; 
`;

export default ListStyled