import React, { Fragment } from 'react'
import { ReactComponent as BulbFill } from '../icons/BulbFill.svg';
import { ReactComponent as BinGrey } from '../icons/binGrey.svg';
import { ReactComponent as SettingsGrey } from '../icons/settingsGrey.svg';
import { ReactComponent as TickGrey } from '../icons/tickGrey.svg';
import { ReactComponent as Phonecall } from '../icons/PhoneFill.svg';
import { ReactComponent as MessageLine } from '../icons/MessageLine.svg';
import { ReactComponent as UserPlusLine } from '../icons/UserPlusLine.svg';
import { ReactComponent as Users2Line } from '../icons/Users2Line.svg';
import { ReactComponent as EyeLine } from '../icons/EyeLine.svg';
import { ReactComponent as ClickLine } from '../icons/ClickLine.svg';
import { ReactComponent as ShopLine } from '../icons/ShopLine.svg';
import { ReactComponent as DownLine } from '../icons/DownLine.svg';
import { ReactComponent as PadLine } from '../icons/PadLine.svg';
import Progress from "./Progress";
import { Link } from 'react-router-dom';

function CreateCampaign() {
  return (
    <Fragment>
      <div className='p-4'>
        <div className="d-flex justify-content-between flex-wrap">
          <div>
            <h4 className='m-0 font-big'>Your Ad Campaign</h4>
            <p className='text-muted'>Launch your ad in just 4 easy steps</p>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>

          <div className='progress-icon p-1'>
            <BulbFill/>
          </div>

          <Progress progress={75}></Progress>

          <div className='progress-icon progress-pending p-1'>
            <BinGrey/>
          </div>

          <Progress progress={0}></Progress>

          <div className='progress-icon progress-pending p-1'>
            <SettingsGrey/>
          </div>

          <Progress progress={0}></Progress>

          <div className='progress-icon progress-pending p-1'>
            <TickGrey/>
          </div>


        </div>
        <div className='d-flex justify-content-between text-progress'>
          <p className='px-2'>What you want to do</p>
          <p className='text-muted px-4'>Choose product</p>
          <p className='text-muted px-4'>Campaign settings</p>
          <p className='text-muted px-4'>Ready to go</p>
        </div>

        <div className='bg-white br-blue p-4 step-div'>
          <div className='d-flex align-items-start'>
            <h6 className='fw-bold'>What you want to do ? <span className='text-muted fw-lighter'>(step 1 of 4)</span></h6>
          </div>
          <hr className='m-0 mb-4'></hr>

          <div className='row'>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-blue rounded-3'>
                <Phonecall/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Get Leads as calls</h6>
                    <p className="m-0 text-muted fs-12">Recha broad audience and get leads through calls</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <MessageLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Get Leads as Facebook messages</h6>
                    <p className="m-0 text-muted fs-12">Get more FB messages from Leads</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <UserPlusLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Increase page followers</h6>
                    <p className="m-0 text-muted fs-12">Encourage customers to follow your page</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <Users2Line/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Get Customer Leads</h6>
                    <p className="m-0 text-muted fs-12">Encourage customers to take action</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <EyeLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Get more youtube views</h6>
                    <p className="m-0 text-muted fs-12">Increase organic views by obtaining user attention</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <ClickLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Get more website traffic</h6>
                    <p className="m-0 text-muted fs-12">Get the right people to visit your website</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <ShopLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Increase Live store traffic</h6>
                    <p className="m-0 text-muted fs-12">Drive visits to local stores, restructions & Dealerships</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <DownLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Increase your App installs</h6>
                    <p className="m-0 text-muted fs-12">Get more Installs, interactions for your app</p>
                </span>
              </div>
            </div>
            <div className='col-md-4 col-sm-6 p-2'>
              <div className='d-flex align-items-center p-3 border-grey rounded-3'>
                <DownLine/>
                <span className='px-3'>
                    <h6 className="m-0 fw-bold">Increase the catalogue sales</h6>
                    <p className="m-0 text-muted fs-12">Drive the sales of your catalogue and get more leads</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row-reverse mt-4">
          <div>
            <Link to="/campaign" type="button" className="d-flex justify-content-center align-items-center btn btn-blue">Continue</Link>
          </div>
        </div>

      </div>
    </Fragment>
  )
}

export default CreateCampaign
