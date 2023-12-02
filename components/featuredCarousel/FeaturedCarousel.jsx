import { Col, Container, Row } from "react-bootstrap";
import AFItop100list from "./AFItop100list";
import useApiRequest from "../useApiRequest";

const FeaturedCarousel = () => {

    const randomArray = []
    for (let i = 0; randomArray.length < 3; i++) {
        let newRandomSelection = Math.floor(Math.random() * 123);
        if (!randomArray.includes(AFItop100list[newRandomSelection])) {
            randomArray.push(AFItop100list[newRandomSelection])
        }
    }

    return (
        <Container className="fluid">
            <Row className="carousel">
                {randomArray.map(item => {
                    const posterURL = useApiRequest(item)
                    
                    return (
                        <Col>
                            <img src={posterURL.apiData.Poster} key={item}/>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default FeaturedCarousel;