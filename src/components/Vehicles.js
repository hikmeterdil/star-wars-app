import React from 'react';
import Vehicle from './Vehicle';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Container, Button } from 'react-bootstrap';

function Vehicles() {
  const [url, setUrl] = useState('https://swapi.dev/api/vehicles/');
  const [pages, setPages] = useState([]);
  const [vehicles, setVehicles] = useState(null);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const fetchVehicles = async () => {
      const result = await axios(url);
      setPages(
        new Array(Math.ceil(result.data.count / 10))
          .fill(0)
          .map((n, i) => i + 1)
      );
      setVehicles(result.data.results);
      setNext(result.data.next);
      setPrev(result.data.previous);
    };
    fetchVehicles();
  }, [url]);
  console.log(pages);
  const changePage = (page) => {
    setUrl(`https://swapi.dev/api/vehicles/?page=${page}`);
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
          {vehicles &&
            vehicles.map((vehicle) => (
              <Col sm={6} md={4} xs={12} lg={4}>
                <Vehicle vehicle={vehicle} />
              </Col>
            ))}
        </Row>{' '}
      </Container>

      <Container className='text-center'>
        {prev && <Button onClick={backward}>Prev</Button>}
        {pages &&
          pages.map((p, i) => (
            <Button
              key={i}
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

export default Vehicles;
