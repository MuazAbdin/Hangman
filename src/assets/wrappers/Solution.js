import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .hint {
    margin-top: 1em;
    text-align: center;
    color: var(--yellow-light);
    font-size: 1.5em;
    font-family: var(--handwrite-font);
  }

  .word {
    font-size: 3.5em;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: var(--grey-50);
    margin: 1em 0;
    text-transform: capitalize;
  }
`;

export default Wrapper;
