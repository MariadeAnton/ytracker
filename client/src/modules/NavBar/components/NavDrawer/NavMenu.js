import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  HomeIcon,
  BoatIcon,
  StoreIcon,
  AccountCircle,
  RowingIcon } from 'mui-components';

const NavMenu = (props) => {
  const {selectedIndex, handleNavMenuItemSelect} = props;
  const topMenuItems = [
    { label: 'Home', icon: <HomeIcon/>, path: '/' },
    { label: 'Yachts', icon: <BoatIcon/>, path: '/yachts' },
    { label: 'Companies', icon: <StoreIcon/>, path: '/company' },
    { label: 'Captains', icon: <RowingIcon/>, path: '/captains' },
    { label: 'Users', icon: <AccountCircle/>, path: '/users' },
  ];

  return (
    <List component="nav" className="nav-menu">
      {
        topMenuItems.map((item, index) => {
          return (
            <ListItem
              key={index}
              button
              selected={selectedIndex === index}
              aria-selected={selectedIndex === index}
              component={Link}
              to={item.path}
              onClick={e => handleNavMenuItemSelect(e, index)}
            >
              <ListItemIcon className="icon">
                {item.icon}
              </ListItemIcon>
              <ListItemText inset primary={item.label} className="text"/>
            </ListItem>
          )
        })
      }
    </List>
  )
}

NavMenu.propTypes = {
  selectedIndex: PropTypes.number,
  handleNavMenuItemSelect: PropTypes.func,
};

NavMenu.defaultProps = {
  selectedIndex: 0,
  handleNavMenuItemSelect: () => undefined,
};

export default NavMenu;
