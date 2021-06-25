import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles({
  root: {
    width: '400px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  body: {
    marginRight : '50px', 
    marginLeft: '50px',
    marginTop: '100px',
    display: 'Flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  header: {
    paddingTop: '50px',
    fontStyle: 'italic'
  },
  formControl: {
    minWidth: '375px',
  }
});
  

export default function OutlinedCard(props) {
  const classes = useStyles();
  const { clickToGoOnline } = props; 
  const [value, setValue] = React.useState(20);
  const [qual, setQual] = React.useState(''); 

  const handleVolChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleQualChange = (e) =>{
    setQual(e.target.value)
  }

  return (
    <div>
        <h1 className={classes.header}>Welcome User!</h1>
        <div className={classes.body}>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Online Mode 
                    </Typography><br></br>
                    <Typography variant="body2" component="p">
                    Is this application connected to the internet?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Switch
                        onChange={() => {clickToGoOnline()}}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </CardActions>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Master Volume
                    </Typography><br></br>
                    <Typography variant="body2" component="p">
                    Overrides all other sound settings in this application.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Slider
                        defaultValue={20}
                        volume={value}
                        onChange={handleVolChange}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={10}
                        marks
                        min={0}
                        max={100}
                    />
                </CardActions>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography variant="h5" component="h2">
                    Sound Quality
                    </Typography><br></br>
                    <Typography variant="body2" component="p">
                    Manually control the music quality in event of poor connection.
                    </Typography>
                </CardContent>
                <CardActions>
                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">EQ</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            quality={qual}
                            onChange={handleQualChange}
                            >
                            <MenuItem value={1}>Low</MenuItem>
                            <MenuItem value={2}>Normal</MenuItem>
                            <MenuItem value={3}>High</MenuItem>
                        </Select>
                    </FormControl>
                </CardActions>
            </Card>
        </div>
        <h3>System Notifications:</h3>
    </div>
  );
}
