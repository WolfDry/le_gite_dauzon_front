import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';

const NameStyled = styled.span<CssProps>`
  align-self: stretch;
  color: #171C19;
  font-family: Poppins;
  font-size: 1rem;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight ?? 400};
  line-height: normal;
  text-align: right;
`;

export default NameStyled