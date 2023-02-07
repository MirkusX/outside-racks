import styled from "styled-components";

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${(props) => {
    if (props.column)
      return `
    flex-direction: column;`;
  }}
`;

export const StyledButton = styled.button`
  border: none;
`;
