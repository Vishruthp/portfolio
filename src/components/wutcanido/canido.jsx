import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import './canido.scss';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    color: 'white'
  },
  inline: {
    display: 'inline',
    color: 'grey'
  },
}));
export default function Canido() {
  const classes = useStyles();
  return (
    <div className='canido'>
      <h2 className="title">What have I done</h2>
      <div className="container">
        <div className="card">
          <div className="titl">
            <h4 style={{ fontWeight: '500' }}>Known Frameworks</h4>
          </div>
          <div className="card__image-container">
            <img className="progimg" src="./assets/angular.png" alt=""></img>
            <img className="progimg" src="./assets/couch.png" alt=""></img>
            <img className="progimg" src="./assets/net.png" alt=""></img>
            <img className="progimg" src="./assets/mongodb.png" alt=""></img>
            <img className="progimg" src="./assets/react.png" alt=""></img>
            <img className="progimg" src="./assets/docker.png" alt=""></img>
            <img className="progimg" src="./assets/arduino.png" alt=""></img>
            <img className="progimg" src="./assets/rasp.png" alt=""></img>
          </div>
        </div>
        <div className="card__content">
          <p style={{ color: 'white', marginLeft: '15px' }}>Started my career with startups and currently working in healthcare</p>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Givevalu Technologies"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Worked on Cross-Platform tool called Apache Cordova with which I developed an app from scratch for School Erp features available in play store and appstore and worked on a Website to fill in details for the app named http://eduawakeconnect.in
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Inherit Systems"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Worked as a Cross Platform Mobile Application Developer using Xamarin.Forms, developing a health care application for Interaction between Patient and Doctor which involves chat,recording blood glucose,recording insulin,counting carbs and recommending medicines based on data.
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Siemens Healthineers"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Worked on an application for lab operators Manage critical tasks in lab from a single mobile interface. Atellica Asa Application is a tablet-based trusted assistant designed to simplify and organize operator interactions with Atellica® Solution analyzers.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>

            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Philips Healthcare"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Working as a full-stack dev in platformization of Philips Healthcare’s platform's services.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
      <div className="mobilecontainer">
        <div className="mobileprog">
          <div className="titl">
            <h4 style={{ fontWeight: '500' }}>Known Frameworks</h4>
          </div>
          <img className="progimg" src="./assets/angular.png" alt=""></img>
          <img className="progimg" src="./assets/couch.png" alt=""></img>
          <img className="progimg" src="./assets/net.png" alt=""></img>
          <img className="progimg" src="./assets/mongodb.png" alt=""></img>
          <img className="progimg" src="./assets/react.png" alt=""></img>
          <img className="progimg" src="./assets/docker.png" alt=""></img>
          <img className="progimg" src="./assets/arduino.png" alt=""></img>
          <img className="progimg" src="./assets/rasp.png" alt=""></img>
          

        </div>
        <div className="mystuff">
          <p style={{ color: 'white', marginLeft: '15px' }}>Started my career with startups and currently working in healthcare</p>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Givevalu Technologies"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Worked on Cross-Platform tool called Apache Cordova with which I developed an app from scratch for School Erp features available in play store and appstore and worked on a Website to fill in details for the app named http://eduawakeconnect.in
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Inherit Systems"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Worked as a Cross Platform Mobile Application Developer using Xamarin.Forms, developing a health care application for Interaction between Patient and Doctor which involves chat,recording blood glucose,recording insulin,counting carbs and recommending medicines based on data.
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Siemens Healthineers"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Worked on an application for lab operators Manage critical tasks in lab from a single mobile interface. Atellica Asa Application is a tablet-based trusted assistant designed to simplify and organize operator interactions with Atellica® Solution analyzers.
                    </Typography>

                  </React.Fragment>
                }
              />
            </ListItem>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary="Philips Healthcare"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Working as a full-stack dev in platformization of Philips Healthcare’s platform's services.
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  )
}
