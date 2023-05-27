import styled from "styled-components";

export const Container = styled.div`
  height: 15rem;
  text-align: center;
  background: #020617;
`;

export const Header = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: clamp(1rem, 2.5rem + 1vw, 5rem);
  color: #e2e8f0;

  > svg {
    color:#10b981;
    font-size: clamp(1rem, 5rem, 5rem)
  }
`;
