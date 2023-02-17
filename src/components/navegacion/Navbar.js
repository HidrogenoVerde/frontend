import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid bg-success">
            <Link to='/'>
              <img src ="./h2-sin-fondo.png" width={30}/>
            </Link>

            <span className="navbar-text text-black mr-auto">
              Innova CONICET – Hidrógeno Verde
            </span>

            <button
            className="navbar-toggler"
            type="button" 
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to ="/inicio_productor">Login</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>

      <style>{`
        .navbar-text {
          margin-right: 20px;
          color: black;
        }
        .span {
          margin-right: 25px;
        }
        .navbar {
          padding: 0px 0px;
          border-bottom: 1px solid #ccc;
        }
        .nav-link {
          font-size: 15px;
          color: black;
          margin-right: 25px;
        }
        .nav-link:hover {
          color: #fff;
          background-color: white;
          border-radius: 5px;
        }
        .nav-link.active {
          background-color: #333;
          padding: 5px 10px;
          border-radius: 5px;
        }
        .navbar img {
          height: 30px;
          margin-right: 25px;
        }
      `}</style>
    </div>
  )
}

export default Navbar