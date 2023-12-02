


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
                        return <div key={id}>{result.Title}</div>
                    })
                }
            </div>
        )
    }
      
}

export default SearchResultsList