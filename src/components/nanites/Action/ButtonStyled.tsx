import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const ButtonStyled = styled.button<CssProps>`
  border: none;
  background: ${(props => props.background ?? "transparent")};
  display: flex;
  padding: ${(props => props.padding ?? "0.75rem 2.5rem")};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  color: ${(props => props.color ?? dark)};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default ButtonStyled