import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, MenuIcon } from 'mui-components';
import { TopNav, BottomNav, NavDrawer } from './components';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      isNavDrawerOpen: false,
      selectedIndex: 0,
      accountMenuAnchor: null
    }
  }

  componentWillMount() {
    window.addEventListener('resize', this.checkViewportWidth);
    this.checkViewportWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkViewportWidth);
  }

  checkViewportWidth = () => {
    if (window.innerWidth <= 768) {
      this.setState({
        isMobile: true
      });
    } else {
      this.setState({
        isMobile: false
      });
    }
  }

  handleNavMenuItemSelect = (e, index) => {
    this.setState({selectedIndex: index});
  }

  toggleDrawer = (isOpen) => {
    this.setState({
      isNavDrawerOpen: isOpen
    });
  }

  handleAccountMenu = (event) => {
    this.setState({accountMenuAnchor: event.currentTarget});
  }

  handleAccountMenuClose = () => {
    this.setState({accountMenuAnchor: null});
  }

  render() {
    const { isMobile, isNavDrawerOpen, selectedIndex, accountMenuAnchor } = this.state;

    return (
      <AppBar position="sticky" color="primary" className="header-appbar">
        <Toolbar className="toolbar">
          <div className="left-menu">
            <IconButton
              className="icon"
              color="inherit"
              aria-label="Menu"
              onClick={() => this.toggleDrawer(!isNavDrawerOpen)}
            >
              <MenuIcon/>
            </IconButton>
          </div>
          {/* <AccountMenu {...{
            isMobile,
            accountMenuAnchor,
            handleNavMenuItemSelect: this.handleNavMenuItemSelect,
            handleAccountMenu: this.handleAccountMenu,
            handleAccountMenuClose: this.handleAccountMenuClose,
          }}
          /> */}
        </Toolbar>
        {!isMobile &&
          <TopNav {...{
            selectedIndex,
            handleNavMenuItemSelect: this.handleNavMenuItemSelect
          }}/>
        }
        {isMobile &&
          <BottomNav {...{
            selectedIndex,
            handleNavMenuItemSelect: this.handleNavMenuItemSelect
          }}/>
        }
        <NavDrawer {...{
          isNavDrawerOpen,
          selectedIndex,
          toggleDrawer: this.toggleDrawer,
          handleNavMenuItemSelect: this.handleNavMenuItemSelect
        }} />
      </AppBar>
    );
  }
}
