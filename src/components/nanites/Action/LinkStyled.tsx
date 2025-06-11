import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const LinkStyled = styled.a<CssProps>`
  color: ${dark};
  font-family: Poppins;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default LinkStyled