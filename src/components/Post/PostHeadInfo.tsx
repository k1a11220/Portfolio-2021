import React, { FunctionComponent } from "react";
import styled from "styled-components";

export interface PostHeadInfoProps {
  title: string;
  date: string;
  client: string;
  categories: string[];
}

const SCategories = styled.div`
  color: #086bce;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 4px;
  line-height: 1.75;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SDate = styled(SCategories)`
  color: #a1a1a1;
  font-weight: 500;
  margin-bottom: 0px;
  line-height: 1.75;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const Hr = styled.hr`
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  color: #4e5968;
`;

const PostHeadInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 100%;
  margin: 0 auto;
  color: #ffffff;
  position: relative;
  top: 64px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 40px 0;
  }
`;

const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 3rem;
  font-weight: 800;
  color: #1d1d1f;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 1.875rem;
  }
`;

const PostHeadInfo: FunctionComponent<PostHeadInfoProps> = function ({
  title,
  date,
  client,
}) {
  return (
    <PostHeadInfoWrapper>
      <SCategories>{client}</SCategories>
      <Title>{title}</Title>
      <SDate>{date}</SDate>
      <Hr />
    </PostHeadInfoWrapper>
  );
};

export default PostHeadInfo;
