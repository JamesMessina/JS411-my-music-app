import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { withStyles } from '@material-ui/core/styles';
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


const styles = theme =>({
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
    marginRight : '25px', 
    marginLeft: '25px',
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
    display: 'Flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  header: {
    paddingTop: '50px',
    fontStyle: 'italic'
  },
  formControl: {
    minWidth: '375px',
  }
});
  

class Dashboard extends Component {

  marks = [
    {
        value: 0,
        label: '0'
    },
    {
        value: 10,
        label: '10'
    },
    {
        value: 20,
        label: '20'
    },
    {
        value: 30, 
        label: '30'
    },
    {
        value: 40,
        label: '40'
    },
    {
        value: 50,
        label: '50'
    },
    {
        value: 60,
        label: '60'
    },
    {
        value: 70,
        label: '70'
    },
    {
        value: 80,
        label: '80'
    },
    {
        value: 90,
        label: '90'
    },
    {
        value: 100,
        label: '100'
    }
];

  state = {
    online: true, 
    volume: 20,
    quality: 2, //normal 
    notifications: [
      {
        textMsg: "Your application is offline. You won't be able to share or stream music to other devices."
      },
      {
        textMsg: "Listening to music at a high volume could cause long-term hearing loss."
      },
      { 
        textMsg: "Music quality is degraded. Increase quality if your connection allows it."
      },
    ]
  };

  handleOnlineSwitch = (e) =>{
    if(e.target.checked){
      this.setState({online: true})
    }else{
      this.setState({online: false})
    }
  }

  onVolumeChange = (value) =>{
    this.setState({volume: value})
  }

  handleQuality = (e) =>{
    this.setState({quality: e.target.value})
  }


  render(){
    const { classes } = this.props;
    const { volume, online, quality, notifications } = this.state;
    
    return (
      <div>
        <Link to="/login">Logout</Link>
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
                        checked={online}
                        onChange={(e) => {this.handleOnlineSwitch(e)}}
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
                      value={volume}
                      onChange={(__, value) => {this.onVolumeChange(value)}}
                      aria-labelledby="continuous-slider"
                      valueLabelDisplay="auto"
                      step={10}
                      marks={this.marks}
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
                          value={quality}
                          onChange={(e) => {this.handleQuality(e)}}
                          >
                          <MenuItem value={1}>Low</MenuItem>
                          <MenuItem value={2}>Normal</MenuItem>
                          <MenuItem value={3}>High</MenuItem>
                        </Select>
                    </FormControl>
                </CardActions>
            </Card>
        </div>
        <div>
          <Typography variant="h3">
            System Notifications:
          </Typography >
          <Typography>
            {!online ?
              <li>{notifications[0].textMsg}</li> :
              <div></div>
            }
          </Typography>
          <Typography>
            {volume >= 80 ?
              <li>{notifications[1].textMsg}</li> :
              <div></div>
            }
          </Typography>
          <Typography>
            {quality < 2 ?
              <li>{notifications[2].textMsg}</li> :
              <div></div>
            }
          </Typography>
        </div>
    </div>
  )
  }
}

export default withStyles(styles)(Dashboard); 
