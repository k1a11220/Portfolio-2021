import * as React from "react";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const IntroWrapper = styled.div`
  & p {
    font-size: var(--font-lg);
  }
`;

const Bio = () => {
  const data = StaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const author = data.site.siteMetadata?.author;

  return (
    <div className="bio">
      <IntroWrapper>
        {author?.name && (
          <p>
            I'm {author.name}, {author?.summary || null}
          </p>
        )}
      </IntroWrapper>
    </div>
  );
};

export default Bio;
