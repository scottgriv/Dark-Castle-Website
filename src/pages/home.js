import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="title-header-large">🏰 Dark Castle Theme 🌲</h1>
      <h1 className="title-header-small">🏰 Dark Castle<br/>Theme 🌲</h1>
      <p className="subtitle">One theme to rule them all...</p>
      <p>
        Dark Castle is a vibrantly elegant dark theme available for
        multiple platforms. Inspired by the timeless beauty and mystery of
        medieval castles, this theme combines rich, deep colors with a clean and
        modern design.
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

      <h2>Platforms</h2>
      <p>
        Dark Castle is available for a variety of platforms to ensure you can
        enjoy a consistent and visually appealing coding experience no matter
        where you work.
      </p>
      <div className="platform-grid">
        <a
          className="platform-card"
          href="https://github.com/scottgriv/Dark-Castle-VSCode"
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
          <img
            src="/images/platforms/xcode.png"
            alt="Xcode"
            className="icon"
          />
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
          href="https://github.com/scottgriv/Dark-Castle-Warp"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/images/platforms/warp.png" alt="Warp" className="icon" />
          <span className="label">Warp</span>
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
          href="https://github.com/scottgriv/Dark-Castle-Theme"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/platforms/github.png"
            alt="GitHub"
            className="icon"
          />
          <span className="label">GitHub</span>
        </a>
        {/* Add more platform cards as needed */}
      </div>
      <p>
        If your favorite platform isn't listed here, we invite you to join in
        our theme conquest by{" "}
        <a
          className="regular-link"
          href="https://github.com/scottgriv/Dark-Castle-Theme?tab=readme-ov-file#how-do-i-submit-a-new-theme"
          target="_blank"
          rel="noreferrer"
        >
          Contributing
        </a>{" "}
        to the Dark Castle Theme. We're just getting started, and there's a wide
        range of platforms still to be covered. Your contributions are
        invaluable in helping us expand and improve this theme for everyone!
      </p>
      <h2>Color Palette</h2>
      <div className="color-palette-container">
        <div className="color-palette-grid">
          <div
            className="color-circle"
            style={{ backgroundColor: "#000000" }}
            title="#000000"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#292929" }}
            title="#292929"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#575757" }}
            title="#575757"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#9C9C9C" }}
            title="#9C9C9C"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#FFFFFF" }}
            title="#FFFFFF"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#EF6B73" }}
            title="#EF6B73"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#FF8040" }}
            title="#FF8040"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#FFD580" }}
            title="#FFD580"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#BAE67E" }}
            title="#BAE67E"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#4DBCED" }}
            title="#4DBCED"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#FF000F" }}
            title="#FF000F"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#08D220" }}
            title="#08D220"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#4164FF" }}
            title="#4164FF"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#9354FF" }}
            title="#9354FF"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#0D8501" }}
            title="#0D8501"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#007B88" }}
            title="#007B88"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#2D449B" }}
            title="#2D449B"
          ></div>
          <div
            className="color-circle"
            style={{ backgroundColor: "#AA1B86" }}
            title="#AA1B86"
          ></div>
        </div>
      </div>
    </Layout>
  )
}
