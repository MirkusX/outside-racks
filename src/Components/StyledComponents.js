import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 811px) {
    flex-direction: column;
    margin-top: 1em;
  }
  ${(props) => {
    if (props.column)
      return `
      background-color: #ccfccb;
    flex-direction: column;
    padding: 1em;
    border-radius: 4px;`;
  }}
`;

export const StyledButton = styled.button`
  border: none;
  background-color: #96e6b3;
  padding: 1em;
  ${(props) => {
    if (props.money)
      return `
    width: 100%;`;
  }}
`;

export const StyledH1 = styled.h1`
  margin-top: 0;
`;
