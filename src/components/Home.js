import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom'; 

export default function WelcomeScreen() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{fontStyle: 'italic', textDecoration: 'underline', fontSize: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#cfe8fc', height: '50vh', color: 'green' }} >
            <Link to="/login">Welcome to my App!</Link>
            <p style={{fontStyle: 'normal', fontSize: '15px'}}>(Click to get started)</p>
        </Typography>
      </Container>
    </React.Fragment>
  );
}
