import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Template from "components/Common/Template";
import theme from "components/Common/Theme";

const Profile = styled.img`
  width: ${theme.width.laptop};
  border-radius: 10px;
  margin-top: ${theme.margin.laptop};
  margin-bottom: ${theme.margin.laptop};
  @media screen and (max-width: 1400px) {
    width: ${theme.width.tablet};
  }
  @media screen and (max-width: 768px) {
    width: ${theme.width.mobile};
    margin-top: ${theme.margin.mobile};
    margin-bottom: ${theme.margin.mobile};
  }
`;

const Container = styled.article`
  width: ${theme.width.tablet};
  /* background-color: #f1f2f4; */
  align-self: center;

  @media screen and (max-width: 768px) {
    width: ${theme.width.mobile};
  }

  & header {
    margin-top: 40px;
    margin-bottom: 20px;
    & h3 {
      margin-bottom: ${theme.margin.mobile};
    }
  }

  & section {
    margin-top: 60px;
    margin-bottom: 20px;
    & p {
      margin-top: 4px;
      margin-bottom: 24px;
    }
    & h3 {
      margin-bottom: ${theme.margin.mobile};
    }
  }
`;

interface InfoPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: string;
      };
    };
  };
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <Template
      title="Beomsoo-log"
      description="좋은 제품을 만들기 위한 고민을 적고 있습니다."
      url="https://blog.beomsoo.me/about"
      image="img"
    >
      <main style={{ alignSelf: "center" }}>
        <Profile src="https://i.imgur.com/4xmnZLI.png" />
        <Container>
          <header>
            <h3 className="font-gradient">"Young and be ambitious!"</h3>
            <p>I love to make impact with awesome products.</p>
            <p>
              I’m currently working as a design engineer at TNG and Product
              Designer at BE THE LIGHT
            </p>
          </header>
        </Container>
      </main>
    </Template>
  );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
