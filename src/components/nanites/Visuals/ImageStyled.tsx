import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const ImageStyled = styled.img<CssProps>`
  display: flex;
  width: ${(props) => props.width ?? ""};
  height: ${(props) => props.height ?? ""};
  align-items: ${(props) => props.alignItems ?? ""};
  padding: ${(props) => props.padding ?? ""};
  border-radius: ${(props) => props.borderRadius ?? ""};
  background: ${(props) => props.background ?? ""};
  gap: ${(props) => props.gap ?? ""};
  flex: ${(props) => props.flex ?? ""};
  overflow: ${(props) => props.overflow ?? ""};
`;

export default ImageStyled