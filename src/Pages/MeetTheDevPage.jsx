import { Container, Card, Row, Col } from "react-bootstrap";

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
                </Card.Body>
            </Card>
            </Col>
        </Row>
      </Container>
    </>
  );
};
export default MeetTheDevPage;