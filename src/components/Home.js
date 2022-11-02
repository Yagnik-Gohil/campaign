import React, { Fragment } from 'react'
import { BsPlusCircle } from 'react-icons/bs'
import { ReactComponent as Search } from '../icons/search.svg';
import { ReactComponent as Facebook } from '../icons/Facebook.svg';
import { ReactComponent as YouTube } from '../icons/YouTube.svg';
import { ReactComponent as Google } from '../icons/Google.svg';
import { ReactComponent as LiveNow } from '../icons/LiveNow.svg';
import { ReactComponent as Paused } from '../icons/Paused.svg';
import { ReactComponent as Exhousted } from '../icons/Exhousted.svg';
import TableRow from './TableRow';

function Home() {
  return (
    <Fragment>
      <div className='p-4'>
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h4 className='m-0 font-big'>Your Campaign</h4>
            <p className='text-muted'>Check the list of campigns you created </p>
          </div>
          <div>
            <button type="button" className="btn btn-blue"><BsPlusCircle /> &nbsp; Create new campaign</button>
          </div>
        </div>
        <div className='bg-white br-blue p-2'>
          <div className="d-flex bd-highlight align-items-center flex-wrap">
            <div className="me-auto p-2 bd-highlight">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="bg-white input-group-text search-icon"><Search /></span>
                </div>
                <input type="text" className="form-control search-box shadow-none" placeholder="Search for the campaign" />
              </div>
            </div>

            <div className="p-2 bd-highlight">
              Platform:
            </div>
            <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Platform
                </button>
                <ul className="dropdown-menu">
                  <li className='text-center'><a className="dropdown-item" href=".#"><Facebook /></a></li>
                  <li className='text-center'><a className="dropdown-item" href=".#"><YouTube /></a></li>
                  <li className='text-center'><a className="dropdown-item" href=".#"><Google /></a></li>
                  <li className='text-center'><a className="dropdown-item" href=".#">All Platform</a></li>
                </ul>
              </div>
            </div>
            <div className="p-2 bd-highlight">
              Status:
            </div>
            <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  All Status
                </button>
                <ul className="dropdown-menu">
                  <li className='text-center'><a className="dropdown-item" href=".#"><LiveNow /></a></li>
                  <li className='text-center'><a className="dropdown-item" href=".#"><Paused /></a></li>
                  <li className='text-center'><a className="dropdown-item" href=".#"><Exhousted /></a></li>
                  <li className='text-center'><a className="dropdown-item" href=".#">All Status</a></li>
                </ul>
              </div>
            </div>
            <div className="p-2 bd-highlight">
              <div className="dropdown">
                <button className="btn dropdown-toggle filter-dd" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Last 30 days
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href=".#">Last 1 day</a></li>
                  <li><a className="dropdown-item" href=".#">Last 7 days</a></li>
                  <li><a className="dropdown-item" href=".#">Last 30 days</a></li>
                  <li><a className="dropdown-item" href=".#">All</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className='table-responsive p-2'>
            <table className="table">
              <thead className='table-head text-muted'>
                <tr>
                  <th scope="col">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" />
                    </div>
                  </th>
                  <th scope="col">On/Off</th>
                  <th scope="col">Campaign</th>
                  <th scope="col">Date Range</th>
                  <th scope="col">Clicks</th>
                  <th scope="col">Budget</th>
                  <th scope="col">Location</th>
                  <th scope="col">Platform</th>
                  <th scope="col">Status</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                <TableRow data={{
                  "onOff": true,
                  "image": "cake1.jpg",
                  "title": "Blueberry cake Campaign",
                  "date": "Created on 14 july",
                  "range": "25 jul 2020 - 01 aug 2020",
                  "clicks": "300",
                  "price": "INR.3,400",
                  "location": "Chennai",
                  "platform": "Facebook",
                  "status": "LiveNow"
                }}></TableRow>
                <TableRow data={{
                  "onOff": false,
                  "image": "cake2.jpg",
                  "title": "Chocolate cake Campaign",
                  "date": "Created on 20 jan",
                  "range": "25 jul 2020 - 01 aug 2020",
                  "clicks": "210",
                  "price": "INR.3,400",
                  "location": "Coimbatore",
                  "platform": "Facebook",
                  "status": "Paused"
                }}></TableRow>
                <TableRow data={{
                  "onOff": false,
                  "image": "cake3.jpg",
                  "title": "Brownie cake Campaign",
                  "date": "Created on 12 jun",
                  "range": "25 jul 2020 - 01 aug 2020",
                  "clicks": "123",
                  "price": "INR.3,400",
                  "location": "Erode",
                  "platform": "Facebook",
                  "status": "Exhousted"
                }}></TableRow>
                <TableRow data={{
                  "onOff": true,
                  "image": "cake4.jpg",
                  "title": "Pumnkin cake Campaign",
                  "date": "Created on 28 feb",
                  "range": "25 jul 2020 - 01 aug 2020",
                  "clicks": "435",
                  "price": "INR.3,400",
                  "location": "Coimbatore",
                  "platform": "YouTube",
                  "status": "LiveNow"
                }}></TableRow>
                <TableRow data={{
                  "onOff": true,
                  "image": "cake5.jpg",
                  "title": "Cup cake Campaign",
                  "date": "Created on 10 jul",
                  "range": "25 jul 2020 - 01 aug 2020",
                  "clicks": "123",
                  "price": "INR.3,400",
                  "location": "Coimbatore",
                  "platform": "Google",
                  "status": "LiveNow"
                }}></TableRow>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default Home