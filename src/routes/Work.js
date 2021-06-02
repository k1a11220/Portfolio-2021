/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import React from "react";
import projectList from "../ProjectList";
import CardList from "../components/CardList";

const Container = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    width: 90vw;
  }
`;

const Work = () => {
  return (
    <Container>
      <div className="title_wrapper">
        <div>
          <p className="font-md font-regular font-gradient">
            I'm Beomsoo Son, an Engineer and Designer based in Suwon, South
            Korea focused on Industrial Design engineering and Digital product
            design.
          </p>
        </div>
      </div>
      <CardList results={projectList} />
    </Container>
  );
};

export default Work;
