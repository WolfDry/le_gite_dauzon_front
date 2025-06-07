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
  color: ${(props) => props.color ?? dark};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
`;

export default ButtonStyled