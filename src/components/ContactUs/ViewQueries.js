import React, { useEffect, useState } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Pagination from './PaginationQueries';
import { useLocation } from 'react-router-dom';
import useStyles from './styles';
import QueryList from './AdminQueries';
import Form from './UpdateStatus/UpdateStatus'

function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

const ContactUsQuery = () => {
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
    const [currentId, setCurrentId] = useState(0);
return(
    <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
            <QueryList setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
          
<Paper className={classes.pagination} elevation={6}>
    <Pagination page={page} />
</Paper>

</Grid>
</Grid>
);
}

export default ContactUsQuery;