import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '225px',
      marginTop: '50px'
    },
  },
}));

export default function SignupButton(props) {
  const classes = useStyles();
  const { clickToSignup } = props; 

  return (
    <div className={classes.root}>
      <Button onClick={() => {clickToSignup()}} variant="contained" color="primary">
        Sign Up
      </Button>
    </div>
  );
}
