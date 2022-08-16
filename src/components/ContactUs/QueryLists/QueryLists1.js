import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { getContactUs, deleteContactUs } from '../../../actions/contactUs';
import useStyles from './styles';

const Query = ({ query, setCurrentId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.card} raised elevation={6}>
      <div className={classes.overlay2} name="edit">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentId(query._id);
            }}
            style={{ color: 'white' }}
            size="small"
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
        <div className={classes.details}><Typography className={classes.title} gutterBottom variant="h5" component="h2">{query.name}</Typography></div>
        <div className={classes.details}><Typography variant="body2" color="textSecondary" component="h2">Email : {query.email}</Typography></div>
        <div className={classes.details}><Typography variant="body2" color="textSecondary" component="h2">Message : {query.message}</Typography></div>
        <div className={classes.details}><Typography variant="body2" color="textSecondary" component="h2">Status : {query.status}</Typography>
        </div>
      <CardActions className={classes.cardActions}>
          <Button size="small" color="secondary" onClick={() => dispatch(deleteContactUs(query._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
      </CardActions>
    </Card>
  );
};

export default Query;
