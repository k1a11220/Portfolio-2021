import React from "react";
import styled from "styled-components";
import Category from "styles/category";
import Img from "gatsby-image";

const Container = styled.header`
  padding-top: 40px;
`;

const PostCategory = styled(Category)`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
`;

const Info = styled.div`
  margin: 0 auto;
  margin-bottom: var(--sizing-md);
  width: var(--post-width);
  padding-top: 80px;
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
  width: var(--width);
  height: 720px;
  overflow: hidden;
  margin: 0 auto;
`;

const ThumbnailImg = styled(Img)`
  border-radius: 10px;
  width: var(--width);
  height: 720px;
  margin: 0 auto;
`;

const PostHead = ({ thumbnail, alt, title, client }) => {
  return (
    <Container>
      {/* <ThumbnailContainer> */}
      <ThumbnailImg fluid={thumbnail} alt={alt} />
      {/* </ThumbnailContainer> */}
      <Info>
        <PostCategory>{client}</PostCategory>
        <Title>{title}</Title>
        <Divider />
      </Info>
    </Container>
  );
};

export default PostHead;
