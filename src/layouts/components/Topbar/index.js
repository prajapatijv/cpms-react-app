import React, { Fragment } from 'react'
import classNames from 'classnames'
import compose from 'recompose/compose'
import PropTypes from 'prop-types'

// Material helpers
import { withStyles } from '@material-ui/core'

// Material components
import { Badge, IconButton, Toolbar, Typography } from '@material-ui/core'

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon
} from '@material-ui/icons'

// Component styles
import styles from './styles';

const Topbar = (props) => {
  const { classes, className, title, isSidebarOpen, onToggleSidebar } = props;
  const rootClassName = classNames(classes.root, className);

  return (
    <Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton className={classes.menuButton} onClick={onToggleSidebar} variant="text">
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>
          <IconButton className={classes.notificationsButton}>
            <Badge badgeContent="0" color="primary" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton}>
            <InputIcon />
          </IconButton>
        </Toolbar>
      </div>
    </Fragment>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => { }
};

export default compose(
  withStyles(styles)
)(Topbar);
