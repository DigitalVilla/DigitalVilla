import React from 'react'
import Icon from './Icons'

const buttons = [
  {
    link: 'https://www.linkedin.com/in/digitalvilla/',
    icon: 'linkedin',
  },
  {
    link: 'https://github.com/DigitalVilla',
    icon: 'github',
  },
  {
    link: 'https://codepen.io/DigitalVilla',
    icon: 'codepen',
  },
  {
    link: 'https://assets.digitalvilla.ca/files/Resume.pdf',
    icon: 'resume',
  },
]

const Menu = (props) => {
  const handleLink = ({ currentTarget }) => {
    const url = currentTarget.getAttribute('data-url')
    window.open(url, '_blank')
  }

  return (
    <>
      <div id="menu" className="controller">
        <button className="menu-button noSelect" onClick={props.toggleMenu}>
          <img
            src="https://assets.digitalvilla.ca/images/logo_DV.png"
            alt="logo"
          />
        </button>

        <nav className={`menu-nav ${props.isOpen ? 'active' : ''}`}>
          <ul>
            {buttons.map((el, i, arr) => {
              let defaultClass = `hide-${arr.length - i} show-${i + 1}`
              return (
                <li
                  key={'menu-item' + i}
                  className={`${defaultClass} ${props.isOpen ? 'active' : ''}`}
                >
                  <Icon icon={el.icon} data-url={el.link} action={handleLink} />
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu
