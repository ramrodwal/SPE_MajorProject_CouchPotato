import React from 'react'

//react router dom is used to make the application single page and in this we use "to" instead of "href" as href takes us to a new page
import { Link } from 'react-router-dom';
import bootstrap from 'react-bootstrap';

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-success">
        <div class="container-fluid">
          {/* link tag is the replacement of anchor tag and "to" is the replacement of "href" tag */}
          <Link class="navbar-brand fs-1 fst-italic" to="/">CouchPotato</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Login">Login</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
