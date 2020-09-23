import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserIdentity } from '../../App';
import logo from '../../fakeData/Logo.png';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isSignedIn, setIsSignIn] = useContext(UserIdentity)
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link to="home">
        <img className={
          (path === '/home' || path === '/booking') ? 'white' : 'black'
        } src={logo} alt="" />
      </Link>
      {
        isSignedIn.displayName&& <h3>welcome to {isSignedIn.displayName}</h3>
      }
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          {
            (path === "/home" || path === "/booking") && <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search your destination" aria-label="Search" />
            </form>
          }

          <Link to="news">
            <p className="navbar-item link">News</p>
          </Link>
          <Link to="destination">
            <p className="navbar-item link">Destination</p>
          </Link>
          <Link to="blog">
            <p className="navbar-item link">Blog</p>
          </Link>
          <Link to="contact">
            <p className="navbar-item link">Contact</p>
          </Link>
          <Link to="login">
            <button className="navbar-item button">Login</button>
          </Link>

        </ul>
      </div>
    </nav>

  );
};

export default Header;