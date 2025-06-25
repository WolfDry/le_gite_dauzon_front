import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const LinkStyled = styled.a<CssProps>`
  display: flex;
  align-items: center;
  color: ${(props) => props.color ?? dark};
  font-family: Poppins;
  font-size: ${(props) => props.fontSize ?? "1.375rem"};
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
`;

export default LinkStyled