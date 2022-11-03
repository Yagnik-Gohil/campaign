import React, { Fragment } from 'react'

function Progress({ progress }) {
  return (
    <Fragment>
      <div className="progress" style={{"height": "5px", "background": "#E4EAF2"}}>
        <div className="progress-bar" role="progressbar" style={{"width": `${progress}%`, "height": "5px", "background": "#F29A2E"}} aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </Fragment>
  )
}

export default Progress
