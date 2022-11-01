import React, { Fragment, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../icons/logo.svg';
import { ReactComponent as HomeLine } from '../icons/homeLine.svg';
import { ReactComponent as SoundLine } from '../icons/soundLine.svg';
import { ReactComponent as BinLine } from '../icons/binLine.svg';
import { ReactComponent as UserLine } from '../icons/userLine.svg';

function Sidebar() {

  const [active, setActive] = useState("home")
  const handleIcon = (e) => {
    console.log(e.target)
  }
  return (
    <Fragment>


      <div className="col-sm-auto bg-dark sticky-top px-0">
        <div className="d-flex flex-sm-column flex-row flex-nowrap bg-dark align-items-center sticky-top py-5">
          <Link to="/" className="d-block link-light text-decoration-none px-3" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
            <Logo />
          </Link>
          <br></br>
          <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center justify-content-between w-100 align-items-center">

            <NavLink to="/home" className="text-decoration-none nav-item px-3 py-2" name="home" onClick={handleIcon}>
              <span className="nav-link py-0" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                <HomeLine/>
              </span>
              <span className="text-white fs-10">Home</span>
            </NavLink>
            <NavLink to="/campaign" className="text-decoration-none nav-item px-3 py-2" name="campaign" onClick={handleIcon}>
              <span className="nav-link py-0" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                <SoundLine />
              </span>
              <span className="text-white fs-10" >Campaign</span>
            </NavLink>
            <NavLink to="products/" className="text-decoration-none nav-item px-3 py-2" name="products" onClick={handleIcon}>
              <span className="nav-link py-0" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                <BinLine />
              </span>
              <span className="text-white fs-10">Products</span>
            </NavLink>
            <NavLink to="/customers" className="text-decoration-none nav-item px-3 py-2" name="customers" onClick={handleIcon}>
              <span className="nav-link py-0" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                <UserLine />
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