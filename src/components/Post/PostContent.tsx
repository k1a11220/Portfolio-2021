import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface PostContentProps {
  html: string;
}

const MarkdownRenderer = styled.div`
  // Renderer Style
  display: flex;
  flex-direction: column;
  width: 700px;
  margin: 0 auto;
  word-break: break-all;

  // Markdown Style
  line-height: 1.75;
  letter-spacing: -0.02rem;
  /* word-break: keep-all; */
  font-weight: 300;

  * {
    font-size: 1.125rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
  // Adjust Heading Element Style

  p {
    margin-bottom: 8px;
  }

  h1 {
    font-size: 3rem; //48px
  }

  h2 {
    font-size: 1.75rem; //26px
    margin-bottom: 8px;
  }

  h3 {
    font-size: 1.5rem; //24px
    margin-bottom: 8px;
  }

  strong {
    color: #1d1d1f;
    font-weight: 600;
  }

  h1,
  h2,
  h3 {
    color: #1d1d1f;
    font-weight: 600;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
    padding-top: 0;
  }

  /* * + h1,
  * + h2,
  * + h3 {
    padding-top: 0;
  } */

  & > h2:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  & > h3:first-child {
    margin-top: 0;
    padding-top: 0;
  }

  img {
    margin: 40px 0 40px 0;
    width: 700px;
    border-radius: 10px;
  }

  // Adjust Quotation Element Style
  blockquote {
    margin-bottom: 1.5rem;
    padding: 5px 15px;
    border-left: 2px solid #1d1d1f;
    font-weight: 800;
  }

  blockquote p {
    margin-bottom: 0;
  }

  // Adjust List Element Style

  li p,
  strong {
    margin: 0;
  }

  ol,
  ul {
    margin-left: 1.25rem;
    margin-bottom: 1.5rem;
  }

  // Adjust Horizontal Rule style
  hr {
    margin: 1.375rem 0 2.5rem;
  }

  // Adjust Link Element Style
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // Adjust Code Style
  code,
  pre {
    max-width: 92vw;
    font-weight: 300;
  }

  pre {
    margin-bottom: 1.5rem;
  }

  code * {
    /* font-family: D2 coding; */
    /* font-family: SF Mono Light; */
    /* font-family: "Roboto Mono", monospace; */
    /* font-family: "Ubuntu", sans-serif; */
    font-family: "Oxygen Mono", monospace;
  }

  code {
    padding: 1px 3px;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  pre {
    background-color: #282a36;
  }
  pre code {
    font-size: 0.75rem;
    padding: 0;
    background: transparent;
  }

  code > .parameter {
    color: #fff;
  }
  sup {
    font-size: 0.75rem;
    vertical-align: super;
    line-height: 0;
  }

  td,
  th {
    border-bottom: 1px solid #d1d1d1;
  }

  // Markdown Responsive Design
  @media (max-width: 768px) {
    width: 92%;
    line-height: 1.6;
    font-size: 0.875rem;

    p {
      margin-bottom: 1.25rem;
    }

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.25rem;
      margin: 28px 0 12px 0px;
    }

    h3 {
      font-size: 1.125rem;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`;

const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />;
};

export default PostContent;
