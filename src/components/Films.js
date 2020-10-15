import React from 'react';
import { Card, Image, Grid } from 'semantic-ui-react';

function Films(props) {
  const movies = props.movies;

  return (
    <> <Grid id='grid-raw'inverted columns={6}>
      {movies &&
        movies.map((movie) => {
          const src = `/${movie.episode_id}.jpg`;
          return (<>
           <Grid.Column key={src}>
           <Grid.Row>
            <Card id={movie.title} style={{ 
                padding: '0.3rem',
                boxShadow: '0 4px 12px 0 white',
                boxShadow: '0 4px 30px 0 blue'}}>
              <Image src={src} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{movie.title}</Card.Header>
              </Card.Content>
            </Card>
            </Grid.Row>
            </Grid.Column>

        
           </> 
          );
        })} </Grid>
    </>
  );
}

export default Films;
