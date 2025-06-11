import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const InputStyled = styled.input<CssProps>`
  // height: 44px;
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${dark};
  background: rgba(255, 255, 255, 0.20);
  font-family: Poppins;
  color: ${dark}
`;

export default InputStyled