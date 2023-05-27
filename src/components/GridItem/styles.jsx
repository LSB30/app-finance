import styled from "styled-components";

export const Tr = styled.tr ``

export const Td = styled.td `
  padding-top: 1.5rem;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 1.8rem;
    height: 1.8rem;
    
  }
`
