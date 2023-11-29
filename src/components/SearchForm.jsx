import { Container, Form, Button } from 'react-bootstrap';

function SearchForm() {
  return (
    <Container className='search-form'>
      <Form className="d-flex mb-5">
        <Form.Control
          type="search"
          placeholder="Search"
          className="mt-5"
          aria-label="Search"
          size='small'
        />

        <Button className="mt-5" variant="outline-success">Search</Button>
      </Form>
    </Container>
  );
}

export default SearchForm;
