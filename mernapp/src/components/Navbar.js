import React from 'react'

//react router dom is used to make the application single page and in this we use "to" instead of "href" as href takes us to a new page
import { Link } from 'react-router-dom';
import bootstrap from 'react-bootstrap';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          {/* link tag is the replacement of anchor tag and "to" is the replacement of "href" tag */}
          <Link className="navbar-brand fs-1 fst-italic" to="/">CouchPotato</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/createuser">Signup</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
