import styled from 'styled-components'
import { dark } from '../../../assets/color';
import { CssProps } from '../../../types/CssProps.type';

const LabelStyled = styled.span<CssProps>`
  align-self: stretch;
  color: ${(props) => props.color ?? dark};
  font-size: ${(props) => props.fontSize ?? '1.25rem'};
  font-style: ${(props) => props.fontStyle ?? 'normal'};
  font-family: Poppins;
  font-weight: ${(props) => props.fontWeight ?? '400'};
  line-height: ${(props) => props.lineHeight ?? 'normal'};
  text-align: ${(props) => props.textAlign ?? ''};
  margin: 0;
`;

export default LabelStyled