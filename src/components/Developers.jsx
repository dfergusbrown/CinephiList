import { Col, Card } from "react-bootstrap";
import { FaBriefcase, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Developer = ({ name, imgSrc, portfolioLink, linkedinLink, githubLink, email }) => (
  <Col xs={6}>
    <Card className="developersCard">
      <Card.Img src={imgSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ullamcorper magna. Phasellus vulputate metus id leo ullamcorper sodales.
        </Card.Text>
        <Card.Link href={portfolioLink} target="_blank"><FaBriefcase color="white" size={25} /></Card.Link>
        <Card.Link href={linkedinLink} target="_blank"><FaLinkedin color="white" size={25} /></Card.Link>
        <Card.Link href={githubLink} target="_blank"><FaGithub color="white" size={25} /></Card.Link>
        <Card.Link href={`mailto:${email}`} target="_blank"><FaEnvelope color="white" size={25} /></Card.Link>
      </Card.Body>
    </Card>
  </Col>
);

export default Developer;