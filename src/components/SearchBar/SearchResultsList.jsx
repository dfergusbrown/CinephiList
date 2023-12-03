import { Nav } from "react-bootstrap"



const SearchResultsList = ({results}) => {
    if(!results) {
        return null
    } else if (results.length === 0) {
        return null
    } else {

        return (
            <div className="resultsList">
                {
                    results.map((result, id) => {
                        return <Nav.Link eventKey={result.Title} className="searchResultLink"><div key={id}>{result.Title}</div></Nav.Link>
                    })
                }
            </div>
        )
    }
      
}

export default SearchResultsList