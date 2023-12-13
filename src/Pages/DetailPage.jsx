import useApiRequest from "../components/useApiRequest"
import { Container, Row, Col } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import './DetailPage.css';

const DetailPage = (props) => { 
    const location = useLocation()
    
    const detailInfo = useApiRequest(location.state).apiData
    console.log(detailInfo)
    
    return(
        <Container className="mt-5">
            <Row>
                <Col className="d-flex justify-content-center">
                    <img src={detailInfo.Poster} />
                </Col>
                <Col className="infogrid">
                    <div className="movieTitle"><h3 className="text-center my-4">{detailInfo.Title}</h3></div>
                    <div className="director1">Director</div>
                        <div className="director2">{detailInfo.Director}</div>
                    <div className="writer1">Writer</div>
                        <div className="writer2">{detailInfo.Writer}</div>
                    <div className="actor1">Starring</div>
                        <div className="actor2">{detailInfo.Actors}</div>
                    <div className="genre1">Genre</div>
                        <div className="genre2">{detailInfo.Genre}</div>
                    <div className="released1">Released</div>
                        <div className="released2">{detailInfo.Released}</div>
                </Col>
            </Row>
            
        </Container>
    )
}

export default DetailPage