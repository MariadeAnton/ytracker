import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import {
  Tabs,
  Tab,
  HomeIcon,
  StoreIcon,
  AccountCircle,
  RowingIcon,
  BoatIcon,
} from 'mui-components';

const styles = theme => ({
  topNav: {
    paddingLeft: '8px',
    backgroundColor: '#FFFFFF',
  },
  tab: {
    marginLeft: '16px',
    marginRight: '16px',
  }
});

const TopNav = (props) => {
  const { classes, selectedIndex, handleNavMenuItemSelect } = props;
  const topNavItems = [
    { label: 'Home', icon: <HomeIcon/>, path: '/' },
    { label: 'Yachts', icon: <BoatIcon/>, path: '/yachts' },
    { label: 'Companies', icon: <StoreIcon/>, path: '/company' },
    { label: 'Captains', icon: <RowingIcon/>, path: '/captains' },
    { label: 'Users', icon: <AccountCircle/>, path: '/users' },
  ];

  return (
    <div className={classes.topNav}>
      <Tabs
        value={selectedIndex}
        indicatorColor="secondary"
        textColor="secondary"
      >
      {
        topNavItems.map((item, index) => {
          return (
            <Tab
              key={index}
              className={classes.tab}
              label={item.label}
              icon={item.icon}
              component={Link}
              to={item.path}
              onClick={e => handleNavMenuItemSelect(e, index)}
            />
          )
        })
      }
      </Tabs>
    </div>
  );
}

TopNav.propTypes = {
  selectedIndex: PropTypes.number,
  handleNavMenuItemSelect: PropTypes.func,
};

TopNav.defaultProps = {
  selectedIndex: 0,
  handleNavMenuItemSelect: () => undefined,
};

export default withStyles(styles)(TopNav);
