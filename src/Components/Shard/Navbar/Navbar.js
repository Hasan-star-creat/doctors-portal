import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <Link to="/home" class="nav-link me-5 active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link me-5" href="#">
                  About
                </Link>
              </li>
              <Link class="nav-item">
                <a class="nav-link me-5" href="#">
                 Dental service 
                </a>
              </Link>
              <Link class="nav-item">
                <a class="nav-link me-5" href="#">
                  Reviews 
                </a>
              </Link>
              <li class="nav-item">
                <a class="nav-link me-5 text-white" href="#">
                 Blog
                </a>
              </li>
              <Link class="nav-item">
                <a class="nav-link me-5 text-white" href="#">
                  Contact-Us
                </a>
              </Link>
              <li class="nav-item">
                <Link class="nav-link me-5 text-white" href="#">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;