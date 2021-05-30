/** @jsxImportSource @emotion/react */
import { Global, jsx, css } from "@emotion/react";

import React from "react";
import projectList from "../ProjectList";
import CardCover from "../components/Work/CardCover";

const Work = () => {
  return (
    <section className="container">
      <div className="title_wrapper">
        <div>
          <p className="font-md font-regular font-gradient">
            I'm Beomsoo Son, an Engineer and Designer based in Suwon, South
            Korea focused on Industrial Design engineering and Digital product
            design.
          </p>
        </div>
      </div>
      <CardCover results={projectList} />
    </section>
  );
};

export default Work;
