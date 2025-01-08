import React, { useEffect } from "react"
import "../components/layout.css"

export default function Archive({ onClose }) {
  useEffect(() => {
    // Prevent background scroll
    document.body.style.overflow = "hidden"
    return () => {
      // Restore scroll when popup is closed
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <div className="archive-popup">
      <div className="archive-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <h2 className="platform-wrapper">Castle Archives</h2>
        <div className="archive-list">
          <ul>
            <p className="archive-date">08/22/2024</p>
            <li>
              We've just hit <i className="fa-solid fa-download fa-bounce"></i>{" "}
              2K+ cross-platform installs!
            </li>
            <li>Thanks again for your support!</li>
            <p className="archive-date">07/12/2024</p>
            <li>Check out our newest theme for Telegram iOS above!</li>
            <p className="archive-date">07/01/2024</p>
            <li>
              We've just hit <i className="fa-solid fa-download fa-bounce"></i>{" "}
              1K+ cross-platform installs!
            </li>
            <li>Thank you for your support!</li>
            <p className="archive-date">06/07/2024</p>
            <li>Dark Castle is fully built.</li>
            <li>Down with the scaffolding!</li>
          </ul>
          {/* Add more archived entries here */}
        </div>
      </div>
      <div className="archive-overlay" onClick={onClose}></div>
    </div>
  )
}
