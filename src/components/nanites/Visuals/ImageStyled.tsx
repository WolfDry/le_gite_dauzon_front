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
  aspect-ratio: ${(props) => props.aspectRatio ?? ""};
  object-fit: ${(props) => props.objectFit ?? ""};

  
  @media (max-width: 1050px) {
    width: ${(props) => props.mWidth ?? ''};
    height: ${(props) => props.mHeight ?? ''};
    align-self: ${(props) => props.mAlignSelf ?? ''};
    border-radius: ${(props) => props.mBorderRadius ?? ""};
  }
`;

export default ImageStyled