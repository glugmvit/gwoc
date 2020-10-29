import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navMenuOpen: false,
      scrollPos: '',
    };
  }

  componentDidMount = () => {
    // For detecting click outside a html tag
    document.addEventListener('mousedown', this.handleClickOutside, false);
    window.addEventListener('scroll', this.scrollPosition);
  };

  componentWillUnmount = () => {
    document.removeEventListener('mousedown', this.handleClickOutside, false);
    window.removeEventListener('scroll', this.scrollPosition);
  };

  scrollPosition = () => {
    const currPos = window.pageYOffset + 100;
    if (this.offSetPos('home') >= currPos) {
      this.setState({ scrollPos: 'home' });
    } else if (
      this.offSetPos('about') < currPos &&
      this.offSetPos('register') > currPos
    ) {
      this.setState({ scrollPos: 'about' });
    } else if (
      this.offSetPos('register') <= currPos &&
      this.offSetPos('schedule') > currPos
    ) {
      this.setState({ scrollPos: 'register' });
    } else if (
      this.offSetPos('schedule') <= currPos &&
      this.offSetPos('contact') > currPos
    ) {
      this.setState({ scrollPos: 'schedule' });
    }
    // else if(this.offSetPos('faq') < currPos && this.offSetPos('contact') >= currPos) {
    //   this.setState({ scrollPos : "schedule" });
    // }
    else if (this.offSetPos('contact') <= currPos) {
      this.setState({ scrollPos: 'contact' });
    }
  };

  offSetPos = (id) => {
    return document.getElementById(id).offsetTop;
  };

  handleClickOutside = (e) => {
    if (this.node && this.node.contains(e.target)) {
      // if nav bar is open and pointer click is inside nav tag, then do nothing
      return;
    }

    // if nav bar is open and pointer click is outside nav tag, then close
    this.onClose();
  };

  // Open the nav bar menu
  onOpen = () => {
    const element = document.getElementById('nav-btn');
    if (element && !element.classList.contains('open')) {
      console.log('open');
      element.classList.add('open');
      this.setState({ navMenuOpen: true });
      window.location.href = '#nav-wrap';
    }
  };

  // Close the nav bar menu
  onClose = () => {
    const element = document.getElementById('nav-btn');
    if (element && element.classList.contains('open')) {
      console.log('CLICK');
      element.classList.remove('open');
      this.setState({ navMenuOpen: false });
      window.location.href = '#nav';
    }
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;

      var description = this.props.data.description;

      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    const { navMenuOpen, scrollPos } = this.state;
    const highlightColor = { color: '#FFC300' };
    return (
      <header id="home">
        <nav id="nav-wrap" ref={(node) => (this.node = node)}>
          <button
            id="nav-btn"
            className="nav-btn"
            onClick={navMenuOpen ? this.onClose : this.onOpen}
          >
            {!navMenuOpen ? (
              <i
                style={{ fontSize: '1.2em' }}
                className="fa fa-bars"
                aria-hidden="true"
              ></i>
            ) : (
              <i
                style={{ fontSize: '1.2em' }}
                className="fa fa-times"
                aria-hidden="true"
              ></i>
            )}
          </button>

          <ul id="nav" className="nav">
            <li className="current">
              <a
                style={scrollPos === 'home' ? highlightColor : {}}
                className="smoothscroll"
                href="#home"
                onClick={this.onClose}
              >
                Home
              </a>
            </li>
            <li>
              <a
                style={scrollPos === 'about' ? highlightColor : {}}
                className="smoothscroll"
                href="#about"
                onClick={this.onClose}
              >
                About
              </a>
            </li>
            <li>
              <a
                style={scrollPos === 'register' ? highlightColor : {}}
                className="smoothscroll"
                href="#register"
                onClick={this.onClose}
              >
                Register
              </a>
            </li>
            <li>
              <a
                style={scrollPos === 'schedule' ? highlightColor : {}}
                className="smoothscroll"
                href="#schedule"
                onClick={this.onClose}
              >
                Schedule
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li>
              <a
                style={scrollPos === 'faq' ? highlightColor : {}}
                className="smoothscroll"
                href="#faq"
                onClick={this.onClose}
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                style={scrollPos === 'contact' ? highlightColor : {}}
                className="smoothscroll"
                href="#contact"
                onClick={this.onClose}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}.</h1>
            <h3>{description}.</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
