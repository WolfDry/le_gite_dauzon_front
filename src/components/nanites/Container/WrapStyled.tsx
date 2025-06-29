import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const WrapStyled = styled.div<CssProps>`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.padding ?? ""};
  justiyf-content: ${(props) => props.justifyContent ?? ""};
  align-items: ${(props) => props.alignItems ?? ""};
  gap: ${(props) => props.gap ?? ""};
  align-self: ${(props) => props.alignSelf ?? ""};
  align-content: ${(props) => props.alignContent ?? ""};
  position: ${(props) => props.position ?? ""};
  width: ${(props) => props.width ?? ""};
  max-width: ${(props) => props.maxWidth ?? ""};
`;

export default WrapStyled