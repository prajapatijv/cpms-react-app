import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Divider, Typography } from '@material-ui/core'

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  company: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5)
  }
});

const Footer = ({ classes, className }) => {
  const rootClassName = classNames(classes.root, className);
  return (
    <div className={rootClassName}>
      <Divider />
      <Typography className={classes.company} variant="body1">
        &copy; 2019
        </Typography>
      <Typography variant="caption">
        React Practice Rocks!
        </Typography>
    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
