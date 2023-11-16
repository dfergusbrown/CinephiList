import { useState } from "react";
import SearchResultsList from "./SearchResultsList";


const SearchBar = () => {
    const [input, setInput] = useState('')
    const [results, setResultsList] = useState([])

    const baseURL = 'http://www.omdbapi.com/?apikey='
    const apiKey = '5c02e86e'

    const fetchData = (value) => {
        fetch(baseURL+ apiKey +'&s='+ value)
        .then(response => response.json())
        .then(data => {
            const resultArray = data.Search.filter(item => {
                return value && item && item.Title
            })
            setResultsList(resultArray)
            console.log(`Data received from omdb: ${resultArray}`)
        })
        .catch(error => console.log(error))
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    }

    return (
        <>
            <div id="searchBar">
                <div>
                    <input 
                        value={input} 
                        onChange={(e) => handleChange(e.target.value) } 
                        placeholder="Search for your favorite movies / shows"
                    />        
                </div>
                <SearchResultsList results={results}/>
            </div>
        </>
    )
}

export default SearchBar;