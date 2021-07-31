import React, { FunctionComponent } from "react";
import { graphql } from "gatsby";
import Template from "components/Common/Template";
import PostHead, { PostHeadProps } from "components/Post/PostHead";
import PostContent from "components/Post/PostContent";
import styled from "styled-components";

interface PostTemplateProps {
  data: {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: string;
            frontmatter: PostHeadProps & {
              summary: string;
              title: string;
              path: string;
              client: string;
            };
          };
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

const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const {
    node: { html, frontmatter },
  } = edges[0];

  return (
    <Template
      title={`[${frontmatter.categories}] ` + frontmatter.title + "- B-log"}
      description={frontmatter.summary}
      url=""
      image=""
    >
      <PostHead {...frontmatter} />
      <PostContent html={html} />
    </Template>
  );
};
export default PostTemplate;

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            client
            date(formatString: "YYYY")
            categories
            thumbnail {
              childImageSharp {
                fluid(
                  maxWidth: 2160
                  maxHeight: 1440
                  fit: INSIDE
                  quality: 100
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
