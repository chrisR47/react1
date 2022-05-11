import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from './signin';
import Button from '@mui/material/Button';
import { Grid, Paper, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import GoogleLogin from 'react-google-login';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import Table from './grid';
import ValueGetterGrid from './grid';
import image from '../src/OIP.jpg';

function App() {
  
  const handleSubmit=async (event)=>
  {
   event.preventDefault();
  //  var res= await axios.post('http://localhost:8080/signin',{username:event.target.username.value,password:event.target.password.value});
  //  localStorage.setItem('token',res.data.token); 


   

  

  const options = {
    method: 'GET',
    url: 'https://instagram47.p.rapidapi.com/get_user_id',
    params: {username: 'chrisrohan_472'},
    headers: {
      'X-RapidAPI-Host': 'instagram47.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0aec3dfdcmsh08604cf6b132fd2p18f93cjsn88d9c998e202'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });
  }
  const responseGoogle=async (res)=>{
     var response= await axios.post('http://localhost:8080/send',res);
  console.log(response.data);
  }
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          <AcUnitRoundedIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    Login Page
          </Typography>
          <Button color="inherit">Reload</Button>
        </Toolbar>
      </AppBar>
    </Box>
      <>
      <br/>
 
       <form onSubmit={handleSubmit}>
         <Grid container>
           <Grid item={6}>   <img src={image}></img></Grid>
    <Grid item xs={6}>
      <Grid container spacing={2}   padding={10}>

   
    
      <Grid item  xs={12}>
      <TextField name='username'  label='Email' type='email' />
      </Grid>
      <Grid item xs={12}>
      <TextField name='password'  label='Password' type='password'/>
      </Grid>
      <Grid item xs={12}>
     
      <Button size='large' variant="contained" type='submit'>Sign In</Button>
      </Grid>
      <Grid item xs={12}>
      
     <GoogleLogin 
    clientId="226694990146-7h7ifsoldfk4tfjjhrdnclj8hvfsb81k.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'} />

      
</Grid>
</Grid>
      </Grid>
      </Grid>
    
      </form>
    
      </>
      <BrowserRouter>
      <Routes>
        <Route path="/table" element={<ValueGetterGrid/>}>
         
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
