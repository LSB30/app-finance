import styled from "styled-components";

export const Container = styled.div`
  max-width: 112rem;
  margin: 2rem auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-around;
  padding: 1.5rem 0px;
  gap: 1rem;

  @media screen and (max-width: 750px) {
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label``;

export const Input = styled.input`
  outline: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 2rem;
    margin-right: 0.5rem;

    accent-color: black;
    margin-top: 0;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #10b981;
  background-color: #020617;
  font-weight: 700;

`;
