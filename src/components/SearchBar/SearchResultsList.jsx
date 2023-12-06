import { Link } from "react-router-dom"


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
                        const { Title } = result
                        return (
                            <Link to='/detailPage'
                            state={Title}
                            className="searchResultLink"
                            key={id}
                            >
                                <div>{Title}</div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
      
}

export default SearchResultsList