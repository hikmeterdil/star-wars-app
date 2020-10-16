import React from 'react';
import Planet from './Planet';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Planets() {
  const [url, setUrl] = useState('https://swapi.dev/api/planets/');
  const [pages, setPages] = useState([]);
  const [planets, setPlanets] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await axios(url);
      setPages(
        new Array(Math.ceil(result.data.count / 10))
          .fill(0)
          .map((n, i) => i + 1)
      );
      setPlanets(result.data.results);
      setNext(result.data.next);
      setPrev(result.data.previous);
    };
    fetchPlanets();
  }, [url]);
  console.log(pages);
  const changePage = (page) => {
    setUrl(`https://swapi.dev/api/planets/?page=${page}`);
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
          {planets &&
            planets.map((planet, i) => (
              <Col key={i} sm={6} md={4} xs={12} lg={4}>
                <Planet planet={planet} />
              </Col>
            ))}
        </Row>{' '}
      </Container>
      <Container className='text-center'>
        {prev && <Button onClick={backward}>Prev</Button>}
        {pages &&
          pages.map((p, i) => (
            <Button key={i}
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

export default Planets;
