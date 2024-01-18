import { Container, Card, Row, Col, Image } from "react-bootstrap";

const MeetTheDevPage = () => {


  return (
    <>
      <Container className="meetTheDevelopers">
        <Row>
          <Col>
            <Card className="developersCard">
              <Card.Img src="/src/assets/fergus.png" />
              <Card.Body>
                <Card.Title>Fergus Brown</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ullamcorper magna. Phasellus vulputate metus id leo ullamcorper sodales.
                </Card.Text>
                <Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/dfergusbrown/" title="LinkedIn" target="_blank"><Image src="../src/assets/linkedin-square-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://github.com/dfergusbrown" title="GitHub" target="_blank"><Image src="../src/assets/github-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://dfergusbrown.github.io/devPortfolio/" title="Portfolio" target="_blank"><Image src="../src/assets/link-icon.svg" width="20rem" fluid /></Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="developersCard">
              <Card.Img src="/src/assets/logan.png" />
              <Card.Body>
                <Card.Title>Logan Hall</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ullamcorper magna. Phasellus vulputate metus id leo ullamcorper sodales.
                </Card.Text>
                <Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/loganthall/" title="LinkedIn" target="_blank"><Image src="../src/assets/linkedin-square-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://github.com/loganthall" title="GitHub" target="_blank"><Image src="../src/assets/github-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://portfolio.hallsoftworks.com/" title="Portfolio" target="_blank"><Image src="../src/assets/link-icon.svg" width="20rem" fluid /></Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="developersCard">
              <Card.Img src="/src/assets/nate.png" />
              <Card.Body>
                <Card.Title>Nate Rollins</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ullamcorper magna. Phasellus vulputate metus id leo ullamcorper sodales.
                </Card.Text>
                <Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/hazel-whitfield/" title="LinkedIn" target="_blank"><Image src="../src/assets/linkedin-square-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://github.com/hazeljpw" title="GitHub" target="_blank"><Image src="../src/assets/github-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://hazelwhitfield.netlify.app/" title="Portfolio" target="_blank"><Image src="../src/assets/link-icon.svg" width="20rem" fluid /></Card.Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="developersCard">
              <Card.Img src="/src/assets/hazel.png" />
              <Card.Body>
                <Card.Title>Hazel Whitfield</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis ullamcorper magna. Phasellus vulputate metus id leo ullamcorper sodales.
                </Card.Text>
                <Card.Text>
                  <Card.Link href="https://www.linkedin.com/in/naterollins/" title="LinkedIn" target="_blank"><Image src="../src/assets/linkedin-square-icon.svg" width="20rem" fluid /></Card.Link>
                  <Card.Link href="https://github.com/nater9ster" title="GitHub" target="_blank"><Image src="../src/assets/github-icon.svg" width="20rem" fluid /></Card.Link>
                  {/* <Card.Link href="" title="Portfolio" target="_blank"><Image src="../src/assets/link-icon.svg" width="20rem" fluid /></Card.Link> */}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default MeetTheDevPage;
