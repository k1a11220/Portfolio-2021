import styled from "@emotion/styled";

export const Article = styled.article`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 1400px) {
    width: 90vw;
  }
`;

export const Text = styled.div`
  margin-bottom: 2.5rem;
  & h3 {
    margin-bottom: 1rem;
  }
  & p {
    margin-bottom: 1rem;
  }
`;
