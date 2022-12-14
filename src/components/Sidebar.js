import React, { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as HomeLine } from '../icons/homeLine.svg';
import { ReactComponent as Home } from '../icons/home.svg';
import { ReactComponent as SoundLine } from '../icons/soundLine.svg';
import { ReactComponent as Sound } from '../icons/sound.svg';
import { ReactComponent as BinLine } from '../icons/binLine.svg';
import { ReactComponent as Bin } from '../icons/bin.svg';
import { ReactComponent as UserLine } from '../icons/userLine.svg';
import { ReactComponent as User } from '../icons/user.svg';
import { useLocation } from 'react-router-dom';

function Sidebar() {

  const route = useLocation();
  const [active, setActive] = useState("home")

  const getPathName = (route) => {
    if (route.includes("home")) {
      return "home";
    }
    else if (route.includes("campaign")) {
      return "campaign";
    }
    else if (route.includes("products")) {
      return "products";
    }
    else if (route.includes("customers")) {
      return "customers";
    }

  }

  useEffect(() => {
    setActive(getPathName(route.pathname))
  }, [route])
  return (
    <Fragment>


      <div className="col-lg-auto bg-dark sticky-top px-0">
        <div className="d-flex flex-lg-column flex-row flex-nowrap bg-dark align-items-center sticky-top res-p5">
          <Link to="/" className="d-block link-light text-decoration-none px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
            <Logo />
          </Link>
          <br></br>
          <ul className="nav nav-pills nav-flush flex-lg-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 align-items-center">

            <NavLink to="/home" className="text-decoration-none nav-item px-3 py-2" name="home" >
              <span className="nav-link py-0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                {active === "home" ? <Home /> : <HomeLine />}
              </span>
              <span className="text-white fs-10">Home</span>
            </NavLink>
            <NavLink to="/campaign" className="text-decoration-none nav-item px-3 py-2" name="campaign" >
              <span className="nav-link py-0" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                {active === "campaign" ? <Sound /> : <SoundLine />}
              </span>
              <span className="text-white fs-10" >Campaign</span>
            </NavLink>
            <NavLink to="/products" className="text-decoration-none nav-item px-3 py-2" name="products" >
              <span className="nav-link py-0" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                {active === "products" ? <Bin /> : <BinLine />}
              </span>
              <span className="text-white fs-10">Products</span>
            </NavLink>
            <NavLink to="/customers" className="text-decoration-none nav-item px-3 py-2" name="customers" >
              <span className="nav-link py-0" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                {active === "customers" ? <User /> : <UserLine />}
              </span>
              <span className="text-white fs-10">Customers</span>
            </NavLink>
          </ul>
        </div>
      </div>

    </Fragment>
  )
}

export default Sidebar