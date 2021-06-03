import styled from "@emotion/styled";
import theme from "./theme";

export const Article = styled.article`
  width: ${theme.width.tablet};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: ${theme.width.mobile};
  }
`;

export const Text = styled.div`
  margin-bottom: ${theme.paragraphMargin.laptop};
  & h3,
  p {
    margin-bottom: 0.75rem;
    @media screen and (max-width: 768px) {
      margin-bottom: ${theme.paragraphMargin.mobile};
    }
  }

  & p:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: ${theme.margin.mobile};
  }
`;

export const Hero = styled.div`
  height: 720px;
  width: ${theme.width.laptop};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1f2f4;
  border-radius: 10px;
  margin-top: ${theme.margin.laptop}; //40px
  margin-bottom: calc(${theme.margin.laptop} * 2);
  background: url(${(props) => props.background});
  background-clip: border-box;
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 1400px) {
    width: ${theme.width.mobile};
    height: 60vw;
  }
  @media screen and (max-width: 768px) {
    margin-top: ${theme.margin.mobile};
    margin-bottom: calc(${theme.margin.mobile} * 2);
  }
`;
