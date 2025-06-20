import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const RowStyled = styled.div<CssProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? ''};
  justify-content: ${(props) => props.justifyContent ?? ''};
  align-self: ${(props) => props.alignSelf ?? ''};
  gap: ${(props) => props.gap ?? ''};
  width: ${(props) => props.width ?? ''};
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
  overflow-y: ${(props) => props.overflowY ?? ''};
  overflow-x: ${(props) => props.overflowX ?? ''};
  border: ${(props) => props.border ?? ''};
  border-left: ${(props) => props.borderLeft ?? ''};
  border-rigth: ${(props) => props.borderRight ?? ''};
  border-radius: ${(props) => props.borderRadius ?? ''};
  background: ${(props) => props.background ?? ''};
  transform: ${(props) => props.transform ?? ''};
  backdrop-filter: ${(props) => props.backdropFilter ?? ''};
  cursor: ${(props) => props.cursor ?? ''};
  z-index: ${(props) => props.zIndex ?? ''};
`;

export default RowStyled;
