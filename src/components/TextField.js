import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
        marginBottom: '30px',
        height: '20px'
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="standard-required" label="Username" /><br></br>
        <TextField
          id="standard-password-input"
          label="Password *"
          type="password"
          autoComplete="current-password"
        />
    </form>
  );
}
