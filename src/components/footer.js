import React from "react"
import { CONFIG } from "./config.js"
// import Icon from './icons/icon.js'; // Corrected import statement

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links-footer">
            <a
              href="mailto:support@nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-building"></i>
            </a>
            <a
              href="https://github.com/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Dark-Castle-Website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-fork"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Dark-Castle-Theme"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-branch"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Dark-Castle-Theme"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-star"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Dark-Castle-Template"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-file-code"></i>
            </a>
            <a
              href="https://github.com/scottgriv/Dark-Castle-Theme/blob/main/docs/PALETTE.md"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-palette"></i>
            </a>
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2014-{new Date().getFullYear()} Night Owl Labs, LLC. - All
          Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
