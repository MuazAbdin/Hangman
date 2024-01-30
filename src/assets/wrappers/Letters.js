import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(13, 1fr);
  gap: 0.3em;
  padding: 0.3em;

  button {
    font-size: 1.25em;
    font-weight: 500;
    font-family: var(--main-font);
  }
  button:disabled {
    cursor: not-allowed;
    background-color: var(--grey-400);
    text-decoration-line: line-through;
  }
`;

export default Wrapper;
