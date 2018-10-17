import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import desktopImg from '../img/bg-login.jpg';
import mobileImg from '../img/bg-login-mobile.jpg';

const styles = theme => ({
  desktopHeader: {
    backgroundImage: `url(${desktopImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '480px',
    marginTop: '-56px',
  },
  mobileHeader: {
    backgroundImage: `url(${mobileImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '240px',
    marginTop: '-56px',
  },
  imageWrapper: {
    position: 'relative',
  },
  gradient: {
    background: 'linear-gradient(90deg, rgba(72,188,250,0.40) 0%, rgba(73,105,242,0.40) 100%)',
    position: 'absolute',
    top: '0',
    bottom: '4px',
    left: '0',
    right: '0',
  },
  mobileImage: {
    maxWidth: '100%',
  },
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
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

  render() {
    const { isMobile } = this.state;
    const { classes } = this.props;
    const bgImage = isMobile ? mobileImg : desktopImg;
    const bgImageClass = isMobile ? classes.mobileHeader : classes.desktopHeader;

    return (
      <div>
        <div className={classes.imageWrapper}>
          <img src={bgImage} className={classes.mobileImage} />
          <div className={classes.gradient} />
        </div>
        <h1>Welcome to the homepage!</h1>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
