import React from "react";
import styled from "styled-components";
import Category from "styles/category";
import Img from "gatsby-image";

const Container = styled.header`
  padding-top: 40px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    padding-top: 24px;
  }
`;

const PostClient = styled(Category)`
  font-size: 1.125rem;
  font-weight: var(--font-weight-semi-bold);
  margin-bottom: 4px;
`;

const Date = styled(PostClient)`
  color: #a1a1a1;
  margin-bottom: 0;
`;

const Info = styled.div`
  margin: 0 auto;
  margin-bottom: var(--sizing-md);
  width: var(--post-width);
  padding-top: 80px;

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    width: 87.5%;
    padding-top: 32px;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: var(--color-gray-3);
  margin-top: var(--sizing-lg);
  margin-bottom: var(--sizing-lg);
`;

const Title = styled.h1`
  font-weight: var(--font-weight-bold);
  line-height: 1.1875;
  font-size: var(--text-xl);
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    line-height: 1.21875;
    font-size: 2.5rem;
  }

  @media (max-width: ${({ theme }) => theme.device.sm}) {
    line-height: 1.21875;
    font-size: 2rem;
  }
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  min-width: var(--min-width);
  padding: 0 var(--padding-lg);
`;

const ThumbnailImg = styled(Img)`
  border-radius: 10px;
  max-width: var(--width);
  padding: 0 var(--padding-lg);
  height: 720px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.device.md}) {
    height: 60vw;
  }
`;

const PostHead = ({ thumbnail, alt, title, client, date }) => {
  return (
    <Container>
      <ThumbnailContainer>
        <ThumbnailImg fluid={thumbnail} alt={alt} />
      </ThumbnailContainer>
      <Info>
        <PostClient>{client}</PostClient>
        <Title>{title}</Title>
        <Date>{date}</Date>
        <Divider />
      </Info>
    </Container>
  );
};

export default PostHead;
