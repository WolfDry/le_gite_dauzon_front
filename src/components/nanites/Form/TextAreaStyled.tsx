import styled from 'styled-components'
import { dark } from '../../../assets/color';

const TextAreaStyled = styled.textarea`
  height: 90px;
  overflow: scroll;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${dark};
  background: rgba(255, 255, 255, 0.20);
  align-self: stretch;
  font-family: Poppins;
  color: ${dark};
`;

export default TextAreaStyled