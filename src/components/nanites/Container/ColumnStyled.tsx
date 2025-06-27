import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const ColumnStyled = styled.div<CssProps>`
  display: ${(props) => props.display ?? 'flex'};
  flex-direction: column;
  align-items: ${(props) => props.alignItems ?? ''};
  justify-content: ${(props) => props.justifyContent ?? ''};
  align-self: ${(props) => props.alignSelf ?? ''};
  flex-shrink: ${(props) => props.flexShrink ?? ''};
  gap: ${(props) => props.gap ?? ''};
  max-width: ${(props) => props.width ?? ''};
  min-width: ${(props) => props.minWidth ?? ''};
  height: ${(props) => props.height ?? ''};
  max-height: ${(props) => props.maxHeight ?? ''};
  background-color: ${(props) => props.bgColor ?? ''};
  margin: ${(props) => props.margin ?? ''};
  margin-top: ${(props) => props.marginTop ?? ''};
  margin-bottom: ${(props) => props.marginBottom ?? ''};
  margin-left: ${(props) => props.marginLeft ?? ''};
  margin-right: ${(props) => props.marginRight ?? ''};
  padding: ${(props) => props.padding ?? ''};
  padding-top: ${(props) => props.paddingTop ?? ''};
  padding-bottom: ${(props) => props.paddingBottom ?? ''};
  padding-left: ${(props) => props.paddingLeft ?? ''};
  padding-right: ${(props) => props.paddingRight ?? ''};
  position: ${(props) => props.position ?? ''};
  top: ${(props) => props.top ?? ''};
  bottom: ${(props) => props.bottom ?? ''};
  left: ${(props) => props.left ?? ''};
  right: ${(props) => props.right ?? ''};
  overflow: ${(props) => props.overflow ?? ''};
  overflow-x: ${(props) => props.overflowX ?? ''};
  overflow-y: ${(props) => props.overflowY ?? ''};
  border: ${(props) => props.border ?? ''};
  border-left: ${(props) => props.borderLeft ?? ''};
  border-rigth: ${(props) => props.borderRight ?? ''};
  border-radius: ${(props) => props.borderRadius ?? ''};
  background: ${(props) => props.background ?? ''};
  box-shadow: ${(props) => props.boxShadow ?? ''};
  flex: ${(props) => props.flex ?? ''};
  transform: ${(props) => props.transform ?? ''};
  cursor: ${(props) => props.cursor ?? ''};
  z-index: ${(props) => props.zIndex ?? ''};


  @media (max-width: 1050px) {
    display: ${(props) => props.mDisplay ?? 'flex'};
    flex-direction: ${(props) => props.direction ?? 'column'};
    width: ${(props) => props.mWidth ?? ''};
    height: ${(props) => props.mHeight ?? ''};
    position: ${(props) => props.mPosition ?? ''};
    border-radius: ${(props) => props.mBorderRadius ?? ''};
    align-items: ${(props) => props.mAlignItems ?? ''};
    align-self: ${(props) => props.mAlignSelf ?? ''};
    justify-content: ${(props) => props.mJustifyContent ?? ''};
    gap: ${(props) => props.mGap ?? ''};
    padding: ${(props) => props.mPadding ?? ''};
    left: ${(props) => props.mLeft ?? ''};
    box-shadow: ${(props) => props.mBoxShadow ?? ''};
    backdrop-filter: ${(props) => props.mBackdropFilter ?? ''};
    transform: ${(props) => props.mTransform ?? ''};
  }

  @media (max-height: 900px) {
    margin-top: ${(props) => props.mMarginTop ?? ''};
  }
`;

export default ColumnStyled
