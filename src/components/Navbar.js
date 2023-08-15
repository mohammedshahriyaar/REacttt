import React from 'react';
// import { BiSolidDashboard } from 'react-icons/bs';
import './Navbar.css';
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg" style={{
      color: "white",
      backgroundColor: "#111827",}}>
      <div className="container-fluid">

<div className="left">

        <a className="navbar-brand" href="/">
          <img src={require('./images/W.png')} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
        </a>
        
        <a className="navbar-brand" href="/">
          <img src={require('./images/T-wind.png')} alt="Logo" width="auto" height="15" className="d-inline-block align-text-top"  style={{margin:"9px"}}/>
        </a>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                <i className="bi bi-grid"></i> Dashboard
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><a className="dropdown-item" href="/">Sublink 1</a></li>
                <li><a className="dropdown-item" href="/">Sublink 2</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle whiteColor" href="/" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                <i className="bi bi-grid"></i> Apps
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><a className="dropdown-item" href="/">Sublink 1</a></li>
                <li><a className="dropdown-item" href="/">Sublink 2</a></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href="/" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                <i className="bi bi-ui-checks"></i> UI Kits
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><a className="dropdown-item" href="/">Sublink 1</a></li>
                <li><a className="dropdown-item" href="/">Sublink 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle whiteColor" href="/" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                <i className="bi bi-file-earmark-text"></i> Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><a className="dropdown-item" href="/">Sublink 1</a></li>
                <li><a className="dropdown-item" href="/">Sublink 2</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown5" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: "white" }}>
                <i className="bi bi-shield-lock"></i> Authentication
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li><a className="dropdown-item" href="/">Sublink 1</a></li>
                <li><a className="dropdown-item" href="/">Sublink 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
</div>
        
        <div className="right">
          <div className="d-flex align-items-center">
            <div className="input-group me-3">
              <i className="bi bi-search" style={{ position: "absolute", left: "10px", }}></i>
              <input type="text" className='search' placeholder='search...' aria-label="Search" />
            </div>
            <a className="btn btn-link text-light me-3" href="/">
              <i className="bi bi-moon"></i>
            </a>
            <a className="btn btn-link text-light me-3" href="/">
              <i className="bi bi-bell"></i>
            </a>
            <div className="d-flex align-items-center ms-3">
            </div>
            <img src={require('./images/profile.jpeg')} alt="Profile" width="30" height="30" className="rounded-circle ms-2" />
          </div>

          <div className="text-light ms-2">
            Maria<br />
            Admin

          </div>
          </div>
        </div>
    </nav>
  );
};

export default Header;