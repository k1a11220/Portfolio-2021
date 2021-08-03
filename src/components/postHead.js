import React from "react";
import styled from "styled-components";
import Category from "styles/category";
import Img from "gatsby-image";

const Container = styled.header``;

const PostCategory = styled(Category)`
  font-size: 0.875rem;
  font-weight: var(--font-weight-semi-bold);
`;

const Info = styled.div`
  margin: 0 auto;
  margin-bottom: var(--sizing-md);
  width: var(--post-width);
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
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
`;

const ThumbnailImg = styled.img`
  width: 3840px;
`;

const PostHead = ({ thumbnail, alt, title, client }) => {
  return (
    <Container>
      <ThumbnailContainer>
        <Img fluid={thumbnail} alt={alt} />
      </ThumbnailContainer>
      <Info>
        <PostCategory>{client}</PostCategory>
        <Title>{title}</Title>
        <Divider />
      </Info>
    </Container>
  );
};

export default PostHead;
