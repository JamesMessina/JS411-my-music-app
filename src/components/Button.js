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

export default function ContainedButtons(props) {
  const classes = useStyles();
  const { clickToLogin } = props; 

  return (
    <div className={classes.root}>
      <Button onClick={() => {clickToLogin()}} variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
}
