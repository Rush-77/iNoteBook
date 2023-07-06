import React from 'react'
import {
  Link,
} from "react-router-dom";

const Navbar = () => {
    // require('react-dom');
    // window.React2 = require('react');
    // console.log(window.React1 === window.React2);
    return (
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">iNotebook</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/about">About</Link></li>
                </ul>
               
                </div>
            </div>
            </nav>
      </div>
    )

}

export default Navbar
