import React from 'react'
const stampUrl = 'https://assets.digitalvilla.ca/images/stamp_DV.jpg'

export default React.memo(function Contact() {
  return (
    <div className="content">
      <BusinessCard />
      <BusinessCard className="background-card" />
      <BusinessCard className="background-card second" />
    </div>
  )
})

const BusinessCard = ({ className = '' }) => {
  return (
    <div className={`business-card ${className}`}>
      <div
        className="logo"
        style={{ backgroundImage: 'url(' + stampUrl + ')' }}
      ></div>

      <div className="content">
        <div className="top">
          <h2>
            OMAR <span>VILLANUEVA</span>
          </h2>
          <h3>Senior Full-Stack Engineer</h3>
        </div>

        <div className="bottom">
          <p>digitalvilla01@gmail.com</p>
          <p>www.digitalvilla.ca</p>
          <p>1+ 587-229-3860</p>
          <p>Calgary, Alberta</p>
        </div>
      </div>
    </div>
  )
}
