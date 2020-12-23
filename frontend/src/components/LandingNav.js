import React from 'react';

const LandingNav = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
      <div class="container">
        <a href="index.html" class="navbar-brand">
          <img
            src="./img/logo.png"
            alt="Stoneburner Software logo"
            width="100"
          />
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#home-section" class="nav-link">
                Home
              </a>
            </li>
            {/* <!-- <li class="nav-item">
              <a href="#explore-head-section" class="nav-link">About Us</a>
            </li> --> */}
            <li class="nav-item">
              <a href="#register" class="nav-link">
                Sign Up
              </a>
            </li>
            <li class="nav-item">
              <a href="#share-head-section" class="nav-link">
                Careers
              </a>
            </li>
            <li class="nav-item">
              <a href="#share-head-section" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default LandingNav;
