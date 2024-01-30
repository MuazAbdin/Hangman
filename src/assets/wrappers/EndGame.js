import styled from "styled-components";

const Wrapper = styled.section`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  padding: 1em;
  font-size: 2.25em;
  font-weight: 500;
  font-family: var(--main-font);
  background-color: hsla(225, 45%, 10%, 0.9);
  border-radius: var(--border-radius);

  .message {
    font-size: 2.5em;
    font-weight: 700;
  }
  .win {
    color: var(--green-dark);
    text-shadow: 0px 0 5px var(--green-light);
  }
  .lose {
    color: var(--red-dark);
  }

  strong {
    text-transform: uppercase;
    color: var(--grey-100);
  }

  button {
    font-size: 0.75em;
    font-weight: 500;
    font-family: var(--main-font);
    padding: 0.5em 1.5em;
  }
`;

export default Wrapper;
