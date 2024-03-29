import React from 'react'
import SplitImage from '../components/SplitImage'

export default React.memo(function About(props) {
  return (
    <>
      <div className="content">
        <SplitImage
          image="https://assets.digitalvilla.ca/images/ego_insta.jpg"
          className="split-about noSelect"
        />
        <div className="dek">
          <h2 className="neo-text">Business Solutions</h2>
          <p className="first">
            I am Omar, the Senior Engineer behind Digital Villa; a "Full-stack
            Software Shop for Web, and Mobile Development". Whether in office or
            remotely, my commitment is to help you grow by focusing on what you
            do best and leaving the technology part to us.
          </p>
          <p className="last">
            <br />
            With a proven track record of increasing ROI by improving
            development / deployment processes. training junior developers and
            designing modern architectures through AWS; I am confident we will
            create great things together.
          </p>
        </div>
      </div>
      <figure className="background noSelect">
        <img
          data-src="https://assets.digitalvilla.ca/pages/lens.jpg"
          alt="Logo"
        />
      </figure>
    </>
  )
})
