import React from 'react';
import SearchResult from './SearchResult';
import { Container, Col, Row } from 'react-bootstrap';

function SearchResults(props) {
  const { results, movies } = props;

  return (
    <Container fluid>
      <Row justified-content-between fluid>
        {results.length > 0
          ? results.map((result, i) => (
              <Col key={i} justify-content-center md={6}>
                <SearchResult result={result} movies={movies} />
              </Col>
            ))
          : []}
      </Row>
    </Container>
  );
}

export default SearchResults;