import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Query from './QueryLists/QueryLists1'
import useStyles from './styles';

const QueryList = ({ setCurrentId }) => {
  const { queries, isLoading } = useSelector((state) => state.queries);
  const classes = useStyles();

  if (!queries.length && !isLoading) return 'No queries';

  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {queries?.map((query) => (
          <Grid key={query._id} item xs={12} sm={12} md={6} lg={3}>
            <Query query={query} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default QueryList;
