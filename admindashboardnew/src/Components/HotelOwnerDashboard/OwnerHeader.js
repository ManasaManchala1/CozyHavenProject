import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function OwnerHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const name=sessionStorage.getItem('name');
  const username=sessionStorage.getItem('username');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handlelogout=()=>{
    sessionStorage.clear();
  }
  return (
    <div className="header">
      <div className="header-left">
        <Link to="/owner-dashboard" className="logo">
          <img src="/assets/img/hotel_logo.png" width={50} height={70} alt="logo"/>
          <span className="logoclass">{name}</span>
        </Link>
        <Link to="/owner-dashboard" className="logo logo-small">
          <img src="/assets/img/hotel_logo.png" alt="Logo" width={30} height={30}/>
        </Link>
      </div>
      <a href="#" id="toggle_btn" onClick={toggleSidebar}>
        <i className="fe fe-text-align-left" />
      </a>
      <a className="mobile_btn" id="mobile_btn" onClick={toggleSidebar}>
        <i className="fas fa-bars" />
      </a>
      {/* <ul className={`nav user-menu ${isSidebarOpen ? 'open' : ''}`}> */}
      <ul className="nav user-menu">
        <li className="nav-item dropdown has-arrow">
          <a href="#" className="dropdown-toggle nav-link" data-toggle="dropdown">
            <span className="user-img">
              <img className="rounded-circle" src="/assets/img/profiles/avatar-01.jpg" width={31} alt="Manasa"/>
            </span>
          </a>
          <div className="dropdown-menu">
            <div className="user-header">
              <div className="avatar avatar-sm">                
                <img src="/assets/img/hotel_logo.png" alt="User Image" className="avatar-img rounded-circle"/>
              </div>
              <div className="user-text">
                <h6>{username}</h6>
                <p className="text-muted mb-0">Hotel Owner</p>
              </div>
            </div>
            <a className="dropdown-item" href="profile.html">
              My Profile
            </a>
            <a className="dropdown-item" href="/owned-hotels">
              My Hotels
            </a>
            <a className="dropdown-item" href="/login" onClick={handlelogout}>
              Logout
            </a>
          </div>
        </li>
      </ul>
      {/* <div className="top-nav-search">
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search here"
          />
          <button className="btn" type="submit">
            <i className="fas fa-search" />
          </button>
        </form>
      </div> */}
    </div>
  );
}

export default OwnerHeader;

