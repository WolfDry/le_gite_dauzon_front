import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const WrapStyled = styled.div<CssProps>`
  display: flex;
  flex-wrap: wrap;
  padding: ${(props) => props.padding ?? ""};
  justify-content: ${(props) => props.justifyContent ?? ""};
  align-items: ${(props) => props.alignItems ?? ""};
  gap: ${(props) => props.gap ?? ""};
  align-self: ${(props) => props.alignSelf ?? ""};
  align-content: ${(props) => props.alignContent ?? ""};
  position: ${(props) => props.position ?? ""};
  width: ${(props) => props.width ?? ""};
  max-width: ${(props) => props.maxWidth ?? ""};

  @media (max-width: 1050px) {
    display: ${(props) => props.mDisplay ?? 'flex'};
    width: ${(props) => props.mWidth ?? ''};
    height: ${(props) => props.mHeight ?? ''};
    border-radius: ${(props) => props.mBorderRadius ?? ''};
    align-items: ${(props) => props.mAlignItems ?? ''};
    justify-content: ${(props) => props.mJustifyContent ?? ''};
    gap: ${(props) => props.mGap ?? ''};
    padding: ${(props) => props.mPadding ?? ''};
    background: ${(props) => props.mBackground ?? ''};
    backdrop-filter: ${(props) => props.mBackdropFilter ?? ''};
  }
`;

export default WrapStyled