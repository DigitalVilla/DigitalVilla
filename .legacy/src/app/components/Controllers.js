import React, { Component } from 'react'
import { setViewSize } from '../utils/isMedia'
import OfflineIcon from './OfflineIcon'
import Menu from './Menu'

export default class Controllers extends Component {
  constructor(props) {
    super(props)
    this.page = ''
    this.count = 1
    this.state = {
      isContactOpen: false,
      isMenuOpen: false,
    }
  }

  componentDidMount() {
    const setView = setViewSize()

    setView()
    window.addEventListener('resize', () => {
      setView()
    })

    if (!window.location.hash || window.location.hash === '#Home') {
      this.toggleMenu()
    }
  }
  componentDidUpdate() {}

  shouldComponentUpdate(prevProps, prevState) {
    const { isMenuOpen, isContactOpen } = this.state
    const { api, fpState } = this.props

    if (isMenuOpen && fpState.lastEvent === 'onLeave') {
      const currentPage = api.getActiveSection().anchor
      // console.log(fpState.lastEvent === "afterLoad" && this.count++);

      // Close the menu when scroll happens
      if (this.page !== currentPage) {
        this.page = currentPage
        this.toggleMenu()
        this.autoCalled = true
      }
    }

    return (
      prevState.isMenuOpen !== isMenuOpen ||
      prevState.isContactOpen !== isContactOpen
    )
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
      isContactOpen: false,
    }))
  }

  toggleContact = () => {
    this.setState((prevState) => ({
      isContactOpen: !prevState.isContactOpen,
      isMenuOpen: false,
    }))
  }

  render() {
    const { isMenuOpen } = this.state

    return (
      <>
        <OfflineIcon />
        <Menu toggleMenu={this.toggleMenu} isOpen={isMenuOpen} />
      </>
    )
  }
}
