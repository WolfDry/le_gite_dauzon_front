import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const InputStyled = styled.input<CssProps>`
  // height: 44px;
  overflow: hidden;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #171C19;
  background: rgba(255, 255, 255, 0.20);
`;

export default InputStyled