import { Container, Form, Row, Button } from 'react-bootstrap';
import { useState } from "react";
import SearchResultsList from "./SearchResultsList";


function SearchForm() {

  const [input, setInput] = useState('')
  const [results, setResultsList] = useState([])

  const baseURL = 'http://www.omdbapi.com/?apikey='
  const apiKey = '5c02e86e'

  const fetchData = (value) => {
      fetch(baseURL+ apiKey +'&s='+ value)
      .then(response => response.json())
      .then(data => {
          const resultArray = data.Search
          // .filter(item => {
          //     return value && item && item.Title
          // })
          setResultsList(resultArray)
          // console.log(`Data received from omdb: ${resultArray}`)
      })
      .catch(error => console.log(error))
  }

  const handleChange = (value) => {
      setInput(value);
      fetchData(value);
  }
  
  return (
    <Container className='search-form'>
      <Form className="d-flex mb-5">
        <Form.Control
          type="search"
          placeholder="Search"
          className="mt-5"
          aria-label="Search"
          size='small'
          value={input}
          onChange={(e) => handleChange(e.target.value) } 
          />

        <Button className="mt-5" variant="outline-success">Search</Button>
      </Form>
        <Row>
          <SearchResultsList results={results}/>
        </Row>
    </Container>
  );
}

export default SearchForm;
