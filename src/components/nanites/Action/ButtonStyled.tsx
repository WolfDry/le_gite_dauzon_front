import styled from 'styled-components'
import { CssProps } from '../../../types/CssProps.type';
import { dark } from '../../../assets/color';

const ButtonStyled = styled.button<CssProps>`
  width: ${(props) => props.width ?? ""};
  border: none;
  background: ${(props => props.background ?? "transparent")};
  display: ${(props) => props.display ?? "flex"};
  padding: ${(props => props.padding ?? "0.75rem 2.5rem")};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: ${(props) => props.borderRadius ?? "100px"};
  color: ${(props => props.color ?? dark)};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  opacity: ${(props) => props.opacity ?? ""};
  flex: ${(props) => props.flex ?? ""};
  cursor: pointer;
  transition: box-shadow ease 0.2s;

  &:hover{
    box-shadow: ${(props) => props.boxShadow ?? "3px 3px 6px 0px rgba(23, 28, 25, 0.14)"};
  }
  
  @media (max-width: 1050px) {
    border-radius: ${(props) => props.mBorderRadius ?? ""};
    
  }
`;

export default ButtonStyled