import React, { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";
import { GlobalStyles } from "components/Common/GlobalStyle";
import Footer from "components/Common/Footer";
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";

interface TemplateProps {
  title: string;
  description: string;
  url: string;
  image: string;
  children: ReactNode;
}

interface CategoriesPageProps {
  location: {
    search: string;
  };
  data: {
    allMarkdownRemark: {
      edges: PostType[];
    };
    file: {
      childImageSharp: {
        fluid: ProfileImageProps["profileImage"];
      };
    };
  };
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
`;

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Navigation />
        <Helmet>
          <title>{title}</title>

          <meta name="description" content={description} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
          <meta property="og:site_name" content={title} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:site" content="@사용자이름" />
          <meta name="twitter:creator" content="@사용자이름" />

          <html lang="ko" />
        </Helmet>

        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Template;
