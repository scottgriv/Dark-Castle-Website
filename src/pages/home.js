import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import Archive from "./archive"
import ColorPalette from "./ColorPalette"

export default function Home() {
  const [showArchive, setShowArchive] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const openArchive = () => {
    setScrollPosition(window.scrollY) // Store the current scroll position
    setShowArchive(true)
  }

  const closeArchive = () => {
    setShowArchive(false)
  }

  useEffect(() => {
    if (showArchive) {
      // Prevent background scroll
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollPosition}px`
    } else {
      // Restore scroll position
      document.body.style.position = ""
      document.body.style.top = ""
      window.scrollTo(0, scrollPosition)
    }
  }, [showArchive, scrollPosition])

  return (
    <Layout>
      <h1 className="title-header-large">🏰 Dark Castle Theme 🌲</h1>
      <h1 className="title-header-small">Dark Castle Theme</h1>
      <p className="subtitle">One theme to rule them all...</p>
      <div className="bulletin-board-container">
        <div className="bulletin-board">
          <h3>
            <i className="fa-solid fa-thumbtack thumbtack-icon"></i>
            Village Bulletin Board
          </h3>
          <ul>
            <p>08/22/2024</p>
            <li>
              We've just hit <i className="fa-solid fa-download fa-bounce"></i>{" "}
              2K+ cross-platform installs!
            </li>
            <li>Thanks again for your support!</li>
            <p>07/12/2024</p>
            <li>Check out our newest theme for Telegram iOS below!</li>
          </ul>
          <a href="#" onClick={openArchive} className="regular-link-2">
            View Castle Archives
          </a>
        </div>
      </div>

      {showArchive && <Archive onClose={closeArchive} />}

      <h2 className="platform-wrapper">About</h2>
      <p>
        Dark Castle is a vibrantly elegant dark theme available for multiple
        platforms. Inspired by the timeless beauty and mystery of medieval
        castles, this theme combines rich, deep colors with a clean and modern
        design.
      </p>
      <div className="screenshot-container">
        <a
          href="https://github.com/scottgriv/Dark-Castle-Theme/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/samples/screenshot.png"
            alt="Screenshot"
            className="screenshot"
          />
        </a>
      </div>

      <h2 className="platform-wrapper">Platforms</h2>
      <p>
        Dark Castle is available for a variety of platforms to ensure you can
        enjoy a consistent and visually appealing coding experience no matter
        where you work.
      </p>
      <div className="platform-grid">
        <a
          className="platform-card"
          href="https://marketplace.visualstudio.com/items?itemName=scottgriv.Dark-Castle"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/vscode.png"
            alt="VSCode"
            className="icon"
          />
          <span className="label">Visual Studio Code</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Notepad-Plus-Plus"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/notepad++.png"
            alt="Notepad++"
            className="icon"
          />
          <span className="label">Notepad++</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Xcode"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/platforms/xcode.png" alt="Xcode" className="icon" />
          <span className="label">Xcode</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Obsidian"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/obsidian.png"
            alt="Obsidian"
            className="icon"
          />
          <span className="label">Obsidian</span>
        </a>
        <a
          className="platform-card"
          href="https://packagecontrol.io/packages/Dark%20Castle%20Color%20Scheme"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/sublime.png"
            alt="Sublime"
            className="icon"
          />
          <span className="label">Sublime</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-iTerm"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/iterm.png"
            alt="iTerm 2"
            className="icon"
          />
          <span className="label">iTerm 2</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Warp"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/platforms/warp.png" alt="Warp" className="icon" />
          <span className="label">Warp</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-MySQL-Workbench"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/workbench.png"
            alt="MySQL Workbench"
            className="icon"
          />
          <span className="label">MySQL Workbench</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-BBEdit"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/bbedit.png"
            alt="BBEdit"
            className="icon"
          />
          <span className="label">BBEdit</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Terminal-App"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/terminal-app.png"
            alt="Terminal.app"
            className="icon"
          />
          <span className="label">Terminal.app</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Windows-Terminal"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/windows-terminal.png"
            alt="Windows Terminal"
            className="icon"
          />
          <span className="label">Windows Terminal</span>
        </a>
        <a
          className="platform-card"
          href="https://t.me/addtheme/wPAMRRVDLaWv0E7Y"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/telegram.png"
            alt="Telegram (iOS)"
            className="icon"
          />
          <span className="label">Telegram (iOS)</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-SwiftUI"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/swiftui.png"
            alt="SwiftUI"
            className="icon"
          />
          <span className="label">SwiftUI</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Sketch"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/sketch.png"
            alt="Sketch"
            className="icon"
          />
          <span className="label">Sketch</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Figma"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/platforms/figma.png" alt="Figma" className="icon" />
          <span className="label">Figma</span>
        </a>
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-Wallpaper"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/wallpaper.png"
            alt="Wallpaper"
            className="icon"
          />
          <span className="label">Wallpaper</span>
        </a>
        <a
          className="platform-card"
          id="platform-github"
          href="https://github.com/scottgriv/Dark-Castle-Theme"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/github.png"
            alt="GitHub"
            className="icon"
          />
          <span className="label">GitHub Repository</span>
        </a>
        {/* Add more platform cards as needed */}
      </div>
      <div>
        <ColorPalette />
      </div>
      <h2 className="platform-wrapper">Become a Contributor</h2>
      <p>
        If your favorite platform isn't listed here, we invite you to join in
        our theme conquest by{" "}
        <a
          className="regular-link"
          href="https://github.com/scottgriv/Dark-Castle-Theme?tab=readme-ov-file#contributing"
          target="_blank"
          rel="noreferrer"
        >
          Contributing
        </a>{" "}
        to the Dark Castle Theme. We're just getting started, and there's a wide
        range of platforms still to be covered. Your contributions are
        invaluable in helping us expand and improve this theme for everyone!
      </p>
      <h2 className="platform-wrapper">Become a Supporter</h2>
      <p>
        Every contribution helps us continue to develop and maintain the future
        of Dark Castle, including new Castle based themes! If you'd like to
        support future Castle building, please consider donating, thank you!
      </p>
      <p align="center">
        <a
          className="regular-link"
          href="https://www.buymeacoffee.com/scottgriv"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            className="support-logo"
          />
        </a>
      </p>
    </Layout>
  )
}
