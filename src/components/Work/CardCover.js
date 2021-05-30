import React from "react";
import styled from "@emotion/styled";
import ProjectCard from "./ProjectCard";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  transition: all 0.2s ease-in;

  @media screen and (max-width: 1400px) {
    width: 90vw;
  }

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const CardCover = (results) => {
  return (
    <Wrapper>
      {results.results.map((post) => {
        return (
          <ProjectCard
            key={post.key}
            title={post.title}
            links={post.links}
            company={post.company}
            year={post.year}
            background={post.background}
            color={post.titleColor}
            tag={post.tag}
            category={post.category}
            lock={post.lock}
          />
        );
      })}
    </Wrapper>
  );
};

export default CardCover;
