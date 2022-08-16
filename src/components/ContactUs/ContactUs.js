import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import useStyles from './styles';
import { createContactUs } from '../../actions/contactUs';
import Input from './Input';

const initialState = { name: '', email: '', message: '' };

const ContactUs = () => {
  const [form, setForm] = useState(initialState);
  const [queryData, setQueryData] = useState(false);
  const dispatch = useDispatch();
  const classes = useStyles();
  console.log(window.IsAdmin);

  const clear = () => {

    setForm({ name: '', email: '', message: '' });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(createContactUs({form}));
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    clear();
  };


  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
      <Paper className={classes.paper} elevation={6}>
        <Typography component="h1" variant="h5">Contact Us Form</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
        
            <Input name="name" label="Name" handleChange={handleChange} autoFocus/>
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="message" label="Your Message" handleChange={handleChange}/>
            
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
              Submit
          </Button>
        </form>
      </Paper>
  );
};

export default ContactUs;
