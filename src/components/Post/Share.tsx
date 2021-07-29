import React, { FunctionComponent } from "react";
import styled from "styled-components";
import Arrow from "./Arrow";
import theme from "components/Common/Theme";
import { graphql } from "gatsby";

const Black = "#4A4A4A";
const Blue = "#4080FF";

interface InfoPageProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          previous: {
            frontmatter: {
              title: string;
            };
          };
        }
      ];
    };
  };
}

const Container = styled.div`
  width: 700px;
  align-self: center;
  margin-top: 62px;
  margin-bottom: 40px;

  & h3 {
    font-size: 1.5rem;
    line-height: 2.25rem;
    font-weight: 600;
    color: #1d1d1d;
  }
  @media (max-width: 768px) {
    width: 92%;
  }
`;

const Line = styled.hr`
  margin-bottom: ${theme.margin.laptop};
`;

const Button = styled.button`
  width: 6.375rem;
  height: 2rem;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  border: none;
  color: white;
  font-size: 0.75rem;
  margin-right: 1rem;
  margin-top: 1.25rem;
  margin-bottom: ${theme.margin.laptop};
  transition: all 0.1s ease-in-out;
  &:hover {
    transition: all 0.1s ease-in-out;
    transform: scale(1.02);
  }
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & h4 {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #1d1d1d;
    font-weight: 500;
  }
  & p {
    font-weight: 500;
  }
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 330px;
    height: 84px;
    border-radius: 10px;
    background-color: #f1f2f4;
    transition: all 0.1s ease-in-out;
    &:hover {
      transition: all 0.1s ease-in-out;
      transform: scale(1.02);
    }
  }
  & div:last-child {
    align-items: flex-end;
    text-align: right;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    & div {
      width: ${theme.width.mobile};
      height: 100px;
      margin-bottom: ${theme.margin.mobile};
    }

    & div:last-child {
      margin-bottom: 0;
    }
  }
`;

const Share: FunctionComponent<InfoPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    previous: { frontmatter },
  } = edges[0];
  return (
    <Container>
      {/* <h3>🚀 공유하기!</h3>
      <div>
        <Button onClick={copyToClipboard} bgColor={Black}>
          Copy Link
        </Button>
        <Button bgColor={Blue}>Facebook</Button>
      </div> */}
      <Line />
      <NavWrapper>
        <div>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Arrow direction="" />
            <span>
              <h4>{frontmatter.title}</h4>
              <p></p>
            </span>
          </span>
        </div>
        <div>
          <span
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Arrow direction="180deg" />
            <span>
              <h4>다음 게시글</h4>
              <p></p>
            </span>
          </span>
        </div>
      </NavWrapper>
    </Container>
  );
};

export default Share;

export const metadataQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        previous {
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
