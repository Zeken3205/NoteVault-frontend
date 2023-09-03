import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import '../css files/Navbar.css';

const Navbar = () => {
    let location = useLocation();
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };
    return (
        <nav disabled className="navbar  navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">NoteVault</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>

                    </ul>
                    {!localStorage.getItem('token') ? <form className="d-flex" role="search">

                        <Link className="btn  mx-2" to="/signup" role="button">Log in</Link>
                        <Link className="btn  mx-2" to="/signup" role="button">Signup</Link>
                    </form> : (<Link className="btn btn-primary mx-2" to="/login" onClick={handleLogout} role="button">Logout</Link>)}
                </div>
            </div>
        </nav>
    )
}

export default Navbar