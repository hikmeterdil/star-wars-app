import React from 'react';
import { Grid } from 'semantic-ui-react';
import SearchResult from './SearchResult';

function SearchResults(props) {
    const {results, movies} = props;
  
  
  
    return ( 
      <Grid columns={2} >
        {results.length > 0 ? results.map((result) => (
          <Grid.Column key={result.name}>
            <Grid.Row>
              <SearchResult
                result={result} 
                movies={movies}
              />
            </Grid.Row> 
          </Grid.Column>
        )) : null}
      </Grid>
    );
  }

  export default SearchResults;