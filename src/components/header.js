import React from "react"
import { Link } from "gatsby"
import { CONFIG } from "./config.js"

const Header = () => {
  const showHeader = CONFIG.showHeader

  return (
    <>
      <div id="pagehead" style={{ display: showHeader ? "block" : "none" }}>
        <div id="headlogo">
          <Link to="/">
            <img
              src="/images/main/banner_large.png"
              alt="Dark Castle Theme"
              title="Dark Castle Theme"
              className="desktop-logo"
            />
            <img
              src="/images/main/banner_small.png"
              alt="Dark Castle Theme"
              title="Dark Castle Theme"
              className="mobile-logo"
            />
          </Link>
        </div>
      </div>
    </>
  )
}

export default Header
