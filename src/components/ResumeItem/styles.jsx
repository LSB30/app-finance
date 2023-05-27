import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 0.5rem;
  padding: 0.5rem 1.5rem;
  width: 30%;
  box-shadow: 0px 1px 8px #ccc;

  @media screen and (max-width: 750px) {
    width: 25%;
    
    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 2rem;
    }
  }
`;

export const Header = styled.header`
  display:flex;
  align-items:center;
  justify-content: space-around;
  width: 100%;
  gap: 1rem;
  margin: 2rem auto;

  > svg {
    width: 2.5rem;
    height: 2.5rem;
    
  }
`;

export const HeaderTitle = styled.p`
  font-size: 2rem;
`

export const Total = styled.span`
  font-size: 3rem;
  font-weight: bold;

`
