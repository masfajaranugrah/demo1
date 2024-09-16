import React, { useState } from 'react';

const Navbar = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // State to track which submenu is open
  const [openSubMenu, setOpenSubMenu] = useState(null);

  // Function to toggle the main menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to toggle the submenu
  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <div>
      <div className="tagline bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="d-flex align-items-center justify-content-between">
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mb-0">
                    <a href="javascript:void(0)" className="text-muted fw-normal">
                      <i data-feather="mail" className="fea icon-sm text-primary"></i> support@Fronter.com
                    </a>
                  </li>
                  <li className="list-inline-item mb-0 ms-3">
                    <a href="javascript:void(0)" className="text-muted fw-normal">
                      <i data-feather="map-pin" className="fea icon-sm text-primary"></i> 4432 Pick Street Denver, CO 80203
                    </a>
                  </li>
                </ul>

                <ul className="list-unstyled social-icon tagline-social mb-0">
                  <li className="list-inline-item mb-0">
                    <a href="javascript:void(0)">
                      <i className="uil uil-facebook-f h6 mb-0"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href="javascript:void(0)">
                      <i className="uil uil-instagram h6 mb-0"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href="javascript:void(0)">
                      <i className="uil uil-twitter h6 mb-0"></i>
                    </a>
                  </li>
                  <li className="list-inline-item mb-0">
                    <a href="javascript:void(0)">
                      <i className="uil uil-linkedin h6 mb-0"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header id="topnav" className="defaultscroll sticky tagline-height">
        <div className="container">
          <a className="logo" href="index.html">
            <span className="logo-light-mode">
              <h4>Demo</h4>
            </span>
           </a>

          <div className="menu-extras">
            <div className="menu-item">
              <a className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          {/* <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item ps-1 mb-0">
              <a href="https://1.envato.market/fronter" target="_blank">
                <div className="btn btn-icon btn-pills btn-primary d-sm-none d-inline-flex">
                  <i className="uil uil-shopping-cart-alt"></i>
                </div>
                <div className="btn btn-pills btn-primary d-none d-sm-block">
                  <i className="uil uil-shopping-cart-alt"></i> Buy Now
                </div>
              </a>
            </li>
          </ul> */}

          {/* Toggle menu based on the state */}
          <div id="navigation" className={isMenuOpen ? 'open' : ''}>
            <ul className="navigation-menu nav-right nav-light">
              <li>
                <a href="index.html" className="sub-menu-item">Home</a>
              </li>

              {/* Dropdown Menu */}
              <li className="has-submenu parent-parent-menu-item">
                <a href="javascript:void(0)" onClick={() => toggleSubMenu('landing')}>
                  Landing
                  <span className="menu-arrow"></span>
                </a>
                <ul className={`submenu ${openSubMenu === 'landing' ? 'open' : ''}`}>
                  <li>
                    <a href="index-business.html" className="sub-menu-item">Business</a>
                  </li>
                  <li>
                    <a href="index-digital-agency.html" className="sub-menu-item">Digital Agency</a>
                  </li>
                  <li>
                    <a href="index-startup.html" className="sub-menu-item">Startups</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="page-contact-one.html" className="sub-menu-item">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
