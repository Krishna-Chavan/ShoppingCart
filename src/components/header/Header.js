import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'

export default function Header() {
    const history = useHistory();
    function handleClick(){
        history.push('/login')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary header">
            <div className="container-fluid">
                <Link className="navbar-brand header-1" to="/"><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="name" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav offset-2">
                        <nav className="navbar">
                            <form className="container-fluid">
                                <div className="input-group">
                                    <input style={{width:'400px'}} type="text" className="form-control" placeholder="Search for products,brands and more" aria-label="Search for products,brands and more" aria-describedby="basic-addon1" />
                                    <span className="input-group-text" id="basic-addon1"><i className="fas fa-search"></i></span>
                                </div>
                            </form>
                        </nav>
                    </ul>
                </div>
                {/* <li classNameName="nav-link">
                    <button type="button" className="btn btn-light">Login</button>
                </li> */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 div-ul">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-1" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            More
                        </a>
                        <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i> Notification Preferences</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#"><i className="fas fa-briefcase"></i>Sell on Amazone</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#"><i className="fad fa-question-square"></i>24x7 Customer Care</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#"><i className="fas fa-chart-line"></i>Advertise</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#"><i className="fas fa-download"></i>Download App</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-light" onClick={handleClick}>Login</button>
                    </li>
                    <li className="nav-item text-2">
                        <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true"><i className="fas fa-shopping-cart"></i>Cart</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
