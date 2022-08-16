import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { updateContactUs } from '../../../actions/contactUs';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [queryData, setQueryData] = useState({ id: '', status: '' });
  const query = useSelector((state) => (currentId ? state.queries.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setQueryData({ id: '', status: '' });
  };

//   useEffect(() => {
//     if (!post?.title) clear();
//     if (post) setPostData(post);
//   }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      clear();
    } else {
      dispatch(updateContactUs(currentId, queryData.status));
      clear();
    }
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Editing Message</Typography>
        <TextField name="status" variant="outlined" label="Status" fullWidth multiline rows={4} value={queryData.status} onChange={(e) => setQueryData({ ...queryData, status: e.target.value })} />
        
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Update</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;
