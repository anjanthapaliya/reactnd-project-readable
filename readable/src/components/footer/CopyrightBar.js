import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import { styles } from '../../styles/header/CopyrightBar'
import GithubIcon from '../assests/GithubIcon'
import {
  Link,
} from 'react-router-dom'

const CopyrightBar = (props) => {
  const classes = props.classes
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item md={3}/>
            <Grid item md={6} className={classes.root}>
              <div className={classes.group}>
                <a target="_blank"
                   href="https://github.com/sujinleeme/reactnd-project-readable"><GithubIcon
                  className="github"/></a>
                <Typography className={classes.copyright} type="subheading"
                            color="inherit">
                  Code by Sujin Lee
                </Typography>
              </div>
            </Grid>
            <Grid item md={3}/>
          </Grid>
        </Toolbar>
      
      </AppBar>
    
    </div>
  )
}

CopyrightBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(CopyrightBar)