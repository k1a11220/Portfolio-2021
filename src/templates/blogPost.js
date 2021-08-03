import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import Layout from "layout/layout";
import SEO from "components/seo";
import Comment from "components/comment";
import { rhythm } from "styles/typography";
import Markdown from "styles/markdown";
import PostHead from "../components/postHead";

const BlogPost = ({ data }) => {
  const {
    markdownRemark: {
      frontmatter: { title, desc, thumbnail, alt, client },
      html,
    },
  } = data;

  let featuredImgFluid = thumbnail.childImageSharp.fluid;
  const ogImagePath = thumbnail && thumbnail.childImageSharp.fixed.src;

  return (
    <Layout>
      <SEO title={title} description={desc} image={ogImagePath} />
      <main>
        <article>
          <PostHead
            title={title}
            client={client}
            thumbnail={featuredImgFluid}
            alt={alt}
          />
          <OuterWrapper>
            <InnerWrapper>
              <div>
                <Markdown
                  dangerouslySetInnerHTML={{ __html: html }}
                  rhythm={rhythm}
                />
              </div>
            </InnerWrapper>
          </OuterWrapper>
        </article>
        <CommentWrap>
          <Comment />
        </CommentWrap>
      </main>
    </Layout>
  );
};

const OuterWrapper = styled.div`
  margin-top: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    margin-top: var(--sizing-lg);
  }
`;

const InnerWrapper = styled.div`
  width: var(--post-width);
  margin: 0 auto;
  padding-bottom: var(--sizing-lg);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
  }
`;

const CommentWrap = styled.section`
  width: 100%;
  padding: 0 var(--padding-sm);
  margin: 0 auto;
  margin-bottom: var(--sizing-xl);

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: auto;
  }
`;

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        desc
        client
        thumbnail {
          childImageSharp {
            fluid(quality: 100, sizes: "maxWidth: 3840") {
              ...GatsbyImageSharpFluid
            }
            fixed(quality: 100) {
              src
            }
          }
        }
        date(formatString: "YYYY")
        category
      }
    }
  }
`;

export default BlogPost;
