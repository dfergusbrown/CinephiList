import { Container, Card, Row, Col } from "react-bootstrap";

const MeetTheDevPage = () => {
  return (
    <>
      <Container fluid="md" className="meetTheDevelopers">
        <Row>
          <Col xs={3} md={3}>
            <Card>
              <Card.Img variant="top" src="/src/assets/fergus.png" />
                <Card.Body>
                <Card.Text>
                    Fergus Brown
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3} md={3}>
            <Card>
              <Card.Img variant="top" src="/src/assets/logan.png" />
                <Card.Body>
                <Card.Text>
                    Logan Hall
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3} md={3}>
            <Card>
              <Card.Img variant="top" src="/src/assets/hazel.png" />
                <Card.Body>
                <Card.Text>
                    Hazel Whitfield
                </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={3} md={3}>
            <Card>
              <Card.Img variant="top" src="/src/assets/nate.png" />
                <Card.Body>
                <Card.Text>
                    Nate Rollins
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