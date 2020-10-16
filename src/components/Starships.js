import React from 'react';
import Starship from './Starship';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Row, Col } from 'react-bootstrap';

function Starships() {
  const [url, setUrl] = useState('https://swapi.dev/api/starships/');
  const [pages, setPages] = useState([]);
  const [starships, setStarships] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchStarships = async () => {
      const result = await axios(url);
      setPages(
        new Array(Math.ceil(result.data.count / 10))
          .fill(0)
          .map((n, i) => i + 1)
      );
      setStarships(result.data.results);
      setNext(result.data.next);
      setPrev(result.data.previous);
    };
    fetchStarships();
  }, [url]);
  console.log(pages);
  const changePage = (page) => {
    setUrl(`https://swapi.dev/api/starships/?page=${page}`);
  };

  const forward = () => {
    if (next) {
      setUrl(next);
    }
  };

  const backward = () => {
    if (prev) {
      setUrl(prev);
    }
  };

  return (
    <>
      <Container>
        <Row>
          {starships &&
            starships.map((starship, i) => (
              <Col sm={6} md={4} xs={12} lg={4}>
                <Starship key={i} starship={starship} />
              </Col>
            ))}
        </Row>
      </Container>

      <Container className='text-center'>
        {prev && <Button onClick={backward}>Prev</Button>}
        {pages &&
          pages.map((p) => (
            <Button
              onClick={() => {
                changePage(p);
              }}
            >
              {p}
            </Button>
          ))}
        {next && <Button onClick={forward}>Next</Button>}
      </Container>
    </>
  );
}

export default Starships;
