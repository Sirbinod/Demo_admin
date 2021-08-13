import React, { useState } from "react"

import { Link } from "react-router-dom"

// Import menuDropdown

import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import logodarkImg from "../../assets/images/logo-dark.png"
import logosmImg from "../../assets/images/logo-sm.png"
import logolightImg from "../../assets/images/logo-light.png"

const Header = props => {
  const [search, setsearch] = useState(false)
  const [singlebtn, setSinglebtn] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  const toggleThameScreen = () =>{
   (isDarkTheme === false) ?  setIsDarkTheme(true) : setIsDarkTheme(false)
  }
  

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    var body = document.body
    if (window.screen.width <= 992) {
      body.classList.toggle("sidebar-enable")
    } else {
      body.classList.toggle("vertical-collpsed")
      body.classList.toggle("sidebar-enable")
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  {/* <img src={logosmImg} alt="" height="22" /> */}
                  Trobustech
                </span>
                <span className="logo-lg">
                  {/* <img src={logodarkImg} alt="" height="17" /> */}
                  Trobustech
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  {/* <img src={logosmImg} alt="" height="22" /> */}
                  Trobustech
                </span>
                <span
                  className="logo-lg"
                  style={{ color: "white", fontSize: "2rem" }}
                >
                  {/* <img src={logolightImg} alt="" height="18" /> */}
                  Trobustech
                </span>
              </Link>
            </div>
            <button
              type="button"
              className="btn btn-sm px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
              onClick={() => {
                tToggle()
              }}
              data-target="#topnav-menu-content"
            >
              <i className="mdi mdi-menu"></i>
            </button>
          </div>

          <div className="d-flex">
          
            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  toggleThameScreen()
                }}
                className="btn header-item noti-icon waves-effect"
                // data-toggle="fullscreen"
              >
                            <i className={isDarkTheme ? "mdi mdi-brightness-7" : "mdi mdi-brightness-2"}  ></i>

              </button>
            </div>

            <div className="dropdown d-none d-lg-inline-block">
              <button
                type="button"
                onClick={() => {
                  toggleFullscreen()
                }}
                className="btn header-item noti-icon waves-effect"
                data-toggle="fullscreen"
              >
                <i className="mdi mdi-fullscreen"></i>
              </button>
            </div>

            <NotificationDropdown />
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
