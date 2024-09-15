import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Inico</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Director</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Genero</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Media</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Productora</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Tipo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export {
  Header
}
