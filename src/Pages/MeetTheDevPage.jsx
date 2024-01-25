import { Container, Row } from "react-bootstrap";
import Developer from "../components/Developers";

const MeetTheDevPage = () => {
  return (
    <Container className="meetTheDevelopers justify-content-center">
      <Row>
        <Developer
          name="Fergus Brown"
          imgSrc="/src/assets/fergus.png"
          portfolioLink="https://dfergusbrown.github.io/devPortfolio/"
          linkedinLink="https://www.linkedin.com/in/dfergusbrown/"
          githubLink="https://github.com/dfergusbrown"
          email="dfergusbrown@gmail.com"
        />
        <Developer
          name="Logan Hall"
          imgSrc="/src/assets/logan.png"
          portfolioLink="https://portfolio.hallsoftworks.com/"
          linkedinLink="https://www.linkedin.com/in/loganthall"
          githubLink="https://github.com/loganthall"
          email="info.tech.logan@gmail.com"
        />
        <Developer
          name="Nate Rollins"
          imgSrc="/src/assets/nate.png"
          // portfolioLink="N/A"
          linkedinLink="https://github.com/nater9ster"
          githubLink="https://github.com/nater9ster"
          email="nater9ster@gmail.com"
        />
        <Developer
          name="Hazel Whitfield"
          imgSrc="/src/assets/hazel.png"
          portfolioLink="https://hazelwhitfield.netlify.app/"
          linkedinLink="https://www.linkedin.com/in/hazel-whitfield/"
          githubLink="https://github.com/hazeljpw"
          email="hazeljpw@outlook.com"
        />
      </Row>
    </Container>
  );
};

export default MeetTheDevPage;