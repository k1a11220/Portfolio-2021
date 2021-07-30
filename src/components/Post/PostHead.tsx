import React, { FunctionComponent } from "react";
import styled from "styled-components";
import PostHeadInfo, { PostHeadInfoProps } from "components/Post/PostHeadInfo";
import Img, { FluidObject } from "gatsby-image";

type GatsbyImgProps = {
  fluid: FluidObject;
  alt: string;
  className?: string;
};

export interface PostHeadProps extends PostHeadInfoProps {
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 92%;
    align-self: center;
  }
`;

const BackgroundImage = styled((props: GatsbyImgProps) => <Img {...props} />)`
  width: 1200px;
  height: 675px;
  object-fit: cover;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 20px;
  object-position: center center;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 240px;
    margin-bottom: 40px;
  }
`;

const PostHead: FunctionComponent<PostHeadProps> = function ({
  title,
  date,
  categories,
  client,
  thumbnail: {
    childImageSharp: { fluid },
  },
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage fluid={fluid} alt="thumbnail" />
      <PostHeadInfo
        client={client}
        title={title}
        date={date}
        categories={categories}
      />
    </PostHeadWrapper>
  );
};

export default PostHead;
