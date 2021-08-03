import React, { useState, useLayoutEffect } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "layout/layout";
import SEO from "components/seo";
import PostGrid from "components/postGrid/postGrid";
import CategoryFilter from "components/categoryFilter";

const Home = ({ pageContext, data }) => {
  const [posts, setPosts] = useState([]);
  const currentCategory = pageContext.category;
  const postData = data.allMarkdownRemark.edges;

  useLayoutEffect(() => {
    const filteredPostData = currentCategory
      ? postData.filter(
          ({ node }) => node.frontmatter.category === currentCategory
        )
      : postData;

    filteredPostData.forEach(({ node }) => {
      const {
        id,
        fields: { slug },
        frontmatter: {
          title,
          desc,
          date,
          category,
          thumbnail: { childImageSharp },
          alt,
        },
      } = node;

      setPosts((prevPost) => [
        ...prevPost,
        {
          id,
          slug,
          title,
          desc,
          date,
          category,
          thumbnail: childImageSharp.id,
          alt,
        },
      ]);
    });
  }, [currentCategory, postData]);

  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Content>
          <HeroText>
            <p>
              I'm <strong>Beomsoo Son,</strong> an Engineer and Designer based
              in Suwon, South Korea focused on Industrial design engineering and
              Digital product design.
            </p>
          </HeroText>
          <CategoryFilter categoryList={data.allMarkdownRemark.group} />
          <PostGrid posts={posts} />
        </Content>
      </Main>
    </Layout>
  );
};

const Main = styled.main`
  min-width: var(--min-width);
  min-height: calc(100vh - var(--nav-height) - var(--footer-height));
  background-color: var(--color-post-background);
`;

const Content = styled.div`
  box-sizing: content-box;
  width: 87.5%;
  max-width: var(--width);
  padding-top: var(--sizing-lg);
  padding-bottom: var(--sizing-lg);
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: var(--grid-gap-lg);
    width: 87.5%;
  }
`;

const HeroText = styled.div`
  width: 80%;
  height: 320px;
  display: flex;
  align-items: center;
  font-size: 1.625rem;

  & p {
    font-family: Oxygen, sans-serif;
    font-weight: 400;
  }

  & strong {
    display: inline !important;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 100%;
    font-size: 1.5rem;
  }
`;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(posts/blog)/" } }
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            date(formatString: "YYYY-MM-DD")
            desc
            thumbnail {
              childImageSharp {
                id
              }
              base
            }
            alt
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Home;
