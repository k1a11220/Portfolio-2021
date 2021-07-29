/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
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

const Title = styled.div`
  position: relative;
  width: 80%;
  height: 322px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div h1 h2 {
    position: relative;
    transition: all 0.2s ease-in;
  }

  & h2 {
    width: 80%;
    margin-top: 40px;
    margin-bottom: 40px;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }

  & h3 {
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
    height: 200px;
  }
`;

const Work = () => {
  return (
    <Container>
      <Title className="title_wrapper">
        <div>
          <p className="font-md font-regular font-gradient">
            I'm Beomsoo Son, an Engineer and Designer based in Suwon, South
            Korea focused on Industrial Design engineering and Digital product
            design.
          </p>
        </div>
      </Title>
      <CardList results={projectList} />
    </Container>
  );
};

export default Work;
