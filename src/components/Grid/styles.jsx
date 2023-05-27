import styled from "styled-components";

export const Table = styled.table`
  width: 98%;
  background-color: #fff;
  padding: 2rem;
  box-shadow: 0px 0px 0.5rem #ccc;
  border-radius: 0.5rem;
  max-width: 112rem;
  margin: 2rem auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  border-bottom: inset;
  padding-bottom: 0.5rem;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;
