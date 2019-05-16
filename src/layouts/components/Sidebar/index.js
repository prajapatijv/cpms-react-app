import React, { Component } from 'react'
import { Link } from "@reach/router"

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  ImageOutlined as ImageIcon,
  SettingsOutlined as SettingsIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

class Sidebar extends Component {
  render() {
    const { classes, className } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
          <NavLink
            className={classes.logoLink}
            to="/"
          >
            <img
              alt="Brainalytica logo"
              className={classes.logoImage}
              src="images/logos/brainalytica_logo.svg"
            />
          </NavLink>
        </div>      
        <Divider className={classes.logoDivider} />
        <List component="div" disablePadding>
          <NavItem component={NavLink} path="/categories" displayName="Categories" icon={<DashboardIcon />} classes={classes} />
          <NavItem component={NavLink} path="/users" displayName="Categories" icon={<PeopleIcon />} classes={classes} />
          <NavItem component={NavLink} path="/items" displayName="Categories" icon={<ShoppingBasketIcon />} classes={classes} />
          <NavItem component={NavLink} path="/assets" displayName="Categories" icon={<ImageIcon />} classes={classes} />
        </List>
        <Divider className={classes.listDivider} />
        <List component="div" disablePadding>
          <NavItem component={NavLink} path="/report-1" displayName="Report 1" icon={<ImageIcon />} classes={classes} />
          <NavItem component={NavLink} path="/report-2" displayName="Report 2" icon={<ImageIcon />} classes={classes} />
        </List>
        <Divider className={classes.listDivider} />
        <List component="div" disablePadding>
          <NavItem component={NavLink} path="/settings" displayName="Settings" icon={<SettingsIcon />} classes={classes} />
        </List>
      </nav>
    );
  }
}


const NavItem = ({ path, displayName, icon, classes }) =>
  <ListItem
    activeClassName={classes.activeListItem}
    className={classes.listItem}
    component={NavLink}
    to={path}
  >
    <ListItemIcon className={classes.listItemIcon}>
      {icon}
    </ListItemIcon>
    <ListItemText
      classes={{ primary: classes.listItemText }}
      primary={displayName}
    />
  </ListItem>

const NavLink = ({activeClassName, ...props}) => 
<Link
    {...props}
    getProps={({ isCurrent }) => {
        return {
            className:  isCurrent ? `${props.className} ${activeClassName}` : props.className
        };
    }}
/>


Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
