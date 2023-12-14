import useApiRequest from "../components/useApiRequest"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import { useLocation } from "react-router-dom"

const DetailPage = (props) => {
    const location = useLocation()

    console.log(location.state)
    const detailInfo = useApiRequest(location.state)

    const details = { "Title": "Title", "Released": "Released", "BoxOffice": "Box Office Earnings", "Director": "Director(s)", "Genre": "Genre", "Rated": "Rating", "Runtime": "Runtime" };

    console.log(detailInfo);
    return (
        <Container id="detailsPage">
            <Card id="detailCard">

            <div id="detailTitle">{`${detailInfo.apiData.Title} (${detailInfo.apiData.Year})`}</div>
            <Row>
                <Col sm={8} md={6}>
                    <img id="detailImage" src={detailInfo.apiData.Poster} />
                </Col>
                <Col id="detailsListCol" sm={4} md={6}>
                    {Object.keys(details).map((key) => {
                        return (
                            <>
                                <div id="detailsList">{`${details[key]}: ${detailInfo.apiData[key]}`}</div>
                            </>
                        )
                    })}
                    <div id="movieButton"><Button variant="outline-secondary">Add To Collection</Button>
                    <Button variant="outline-success">I Want This Movie!</Button></div>
                    <div id="plot">
                        {`${detailInfo.apiData.Plot}`}
                    </div>
                </Col>
            </Row>
            </Card>
        </Container >
    )
}

export default DetailPage