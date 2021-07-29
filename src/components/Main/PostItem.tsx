import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Img, { FluidObject } from "gatsby-image";

interface PostItemProps {
  title: string;
  date: string;
  client: string;
  categories: string[];
  summary: string;
  thumbnail: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
  link: string;
}
const PostItemWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: 0.3s box-shadow;
  cursor: pointer;
  transition: all 0.2s ease-in;
  height: 380px;
  background-color: ${(props) => props.theme.postCoverColor};

  &:hover {
    box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.1),
      0px 10px 10px -5px rgba(0, 0, 0, 0.04);
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 639px) {
    height: 260px;
  }
`;

const ThumbnailImage = styled(Img)`
  width: 100%;
  border-radius: 10px;
  background-color: #fafafa;
  position: absolute;
  z-index: 0;
  object-fit: contain;
`;

const PostItemContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  border-radius: 10px;
  background-color: #f1f2f4;

  @media (max-width: 1024px) {
    height: 320px;
  }

  @media (max-width: 639px) {
    height: 260px;
  }
`;

const ItemInfo = styled.div`
  position: absolute;
  margin: 40px 0 0 40px;
  opacity: 0;
  & h4 {
    font-weight: 500;
    font-size: 1.125rem;
  }

  @media (max-width: 639px) {
    margin: 24px 0 0 24px;

    & h4 {
      font-size: 1rem;
    }
  }
`;

const Title = styled.h2`
  margin-bottom: 6px;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1.5rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  client,
  thumbnail: {
    childImageSharp: { fluid },
  },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <ThumbnailImage fluid={fluid} alt="Post Item Image" />
        <ItemInfo>
          <Title>{title}</Title>
          <h4>
            {client} · {date}
          </h4>
        </ItemInfo>
      </PostItemContent>
    </PostItemWrapper>
  );
};

export default PostItem;
