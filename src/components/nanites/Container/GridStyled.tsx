import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const GridStyled = styled.div<CssProps>`
  display: grid;
  grid: ${(props) => props.grid ?? ""};
  grid-template-columns: ${(props) => props.gridTemplateColumn ?? ""};
  position: ${(props) => props.position ?? ""};
  max-width: ${(props) => props.width ?? ""};
`;

export default GridStyled