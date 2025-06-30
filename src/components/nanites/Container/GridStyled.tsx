import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const GridStyled = styled.div<CssProps>`
  display: grid;
  grid: ${(props) => props.grid ?? ""};
  grid-template-columns: ${(props) => props.gridTemplateColumn ?? ""};
  gap: ${(props) => props.gap ?? ""};
  position: ${(props) => props.position ?? ""};
  width: ${(props) => props.width ?? ""};
  max-width: ${(props) => props.maxWidth ?? ""};
  padding: ${(props) => props.padding ?? ""};
  align-self: ${(props) => props.alignSelf ?? ""};
`;

export default GridStyled