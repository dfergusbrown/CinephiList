import useApiRequest from "../components/useApiRequest"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import './DetailPage.css';

const DetailPage = (props) => {
    const location = useLocation()

    console.log(location.state)
    const detailInfo = useApiRequest(location.state)

    const details = { "Title": "Title", "Released": "Released", "BoxOffice": "Box Office Earnings", "Director": "Director(s)", "Genre": "Genre", "Rated": "Rating", "Runtime": "Runtime" };

    console.log(detailInfo);
    return (
        <Container id="detailsPage">
            <div id="detailTitle">{`${detailInfo.apiData.Title} (${detailInfo.apiData.Year})`}</div>
            <Row>
                <Col>
                    <img id="detailImage" src={detailInfo.apiData.Poster} />
                </Col>
                <Col id="detailsListCol">
                    {Object.keys(details).map((key) => {
                        return (
                            <>
                                <div id="detailsList">{`${details[key]}: ${detailInfo.apiData[key]}`}</div>
                            </>
                        )
                    })}
                    <div><Button variant="outline-secondary">Add To Collection</Button></div>
                    <div><Button variant="outline-success">I Want This Movie!</Button></div>
                </Col>
            </Row>
            <Row id="plot">
                {`${detailInfo.apiData.Plot}`}
            </Row>
        </Container >
    )
}

export default DetailPage
