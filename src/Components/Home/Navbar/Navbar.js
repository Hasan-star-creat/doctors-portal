import React from 'react';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link me-5 active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5" href="#">
                 Dental service 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5" href="#">
                  Reviews 
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white" href="#">
                 Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white" href="#">
                  Contact-Us
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link me-5 text-white" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;