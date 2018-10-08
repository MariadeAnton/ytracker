import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  BottomNavigation,
  BottomNavigationAction,
  HomeIcon,
  BoatIcon,
  StoreIcon,
  AccountCircle,
  RowingIcon,
} from 'mui-components';

const styles = theme => ({
  bottomNav: {
    position: 'absolute',
    top: 'calc(100vh - 58px)',
    bottom: '0',
    right: '0',
    left: '0',
  },
});

const BottomNav = (props) => {
  const {classes, selectedIndex, handleNavMenuItemSelect} = props;
  const bottomNavItems = [
    { label: 'Home', icon: <HomeIcon/>, path: '/' },
    { label: 'Yachts', icon: <BoatIcon/>, path: '/yachts' },
    { label: 'Companies', icon: <StoreIcon/>, path: '/company' },
    { label: 'Captains', icon: <RowingIcon/>, path: '/captains' },
    { label: 'Users', icon: <AccountCircle/>, path: '/users' },
  ];

  return (
    <BottomNavigation
      value={selectedIndex}
      showLabels
      className={classes.bottomNav}
    >
      {
        bottomNavItems.map((item, index) => {
          return (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
              component={Link}
              to={item.path}
              onClick={e => handleNavMenuItemSelect(e, index)}
            />
          )
        })
      }
    </BottomNavigation>
  );
}

BottomNav.propTypes = {
  selectedIndex: PropTypes.number,
  handleNavMenuItemSelect: PropTypes.func,
}

BottomNav.defaultProps = {
  selectedIndex: 0,
  handleNavMenuItemSelect: () => undefined,
};

export default withStyles(styles)(BottomNav);
