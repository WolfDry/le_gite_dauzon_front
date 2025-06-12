import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark, white } from '../../../assets/color';

const ButtonStyled = styled.button<CssProps>`
  display: flex;
  overflow: hidden;
  padding: 0.75rem 2.5rem;
  border: 0;
  border-radius: 6.25rem;
  background: ${(props) => props.background ?? white};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  font-family: Poppins;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${(props) => props.color ?? dark};
`;

export default ButtonStyled