import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import { ReactComponent as BuyPlane } from '../icons/BuyPlane.svg';
import { ReactComponent as Cake } from '../icons/Cake.svg';
import { ReactComponent as Gift } from '../icons/gift.svg';
import { ReactComponent as LanguageSwap } from '../icons/LanguageSwap.svg';
import { ReactComponent as Notification } from '../icons/notification.svg';

function Navbar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-sm bg-white navbar-light top-navbar text-black px-4 py-2">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <span className='me-auto'></span>
                        <ul className="d-flex align-items-center navbar-nav">
                            <li className="nav-item">
                                <span class="nav-link" to="/home" id="navbarDropdown" role="button">
                                Free trial ends in 2 days
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="/home" id="navbarDropdown" role="button">
                                <BuyPlane />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="/home" id="navbarDropdown" role="button">
                                <Gift />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="/home" id="navbarDropdown" role="button">
                                <Notification />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="/home" id="navbarDropdown" role="button">
                                <Cake />
                                </Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="/home" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Mukund cake shop
                                </Link>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link class="dropdown-item" to="/home">Action</Link></li>
                                    <li><Link class="dropdown-item" to="/home">Another action</Link></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><Link class="dropdown-item" to="/home">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item"> 
                                <Link class="nav-link" to="/home" id="navbarDropdown" role="button">
                                <LanguageSwap />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar