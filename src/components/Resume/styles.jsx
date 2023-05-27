import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  display:flex;
  width: 98%;
  margin: 0 auto;
  gap: 2rem;
  margin-top: -5rem;
  justify-content: space-around;

  @media screen and (max-width: 750px) {
    
    justify-content: center;
  }
`;