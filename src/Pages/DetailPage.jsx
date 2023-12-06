import useApiRequest from "../components/useApiRequest"
import { Container } from "react-bootstrap"
import { useLocation } from "react-router-dom"

const DetailPage = (props) => { 
    const location = useLocation()
    
    console.log(location.state)
    const detailInfo = useApiRequest(location.state)

    
    return(
        <Container>
            <div>detail Page </div>
            <img src={detailInfo.apiData.Poster} />
        </Container>
    )
}

export default DetailPage