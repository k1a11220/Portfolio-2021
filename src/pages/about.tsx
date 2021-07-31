import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Template from "components/Common/Template";

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
        <img src="https://i.imgur.com/4xmnZLI.png" alt="profile" />
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
