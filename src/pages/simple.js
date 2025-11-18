import React from "react"
import Seo from "../components/seo"
import ColorPalette from "./ColorPalette"
import "../components/layout.css"

export default function Simple() {
  return (
    <>
      <Seo
        title="Dark Castle Theme"
        description="A vibrantly elegant dark theme available for multiple platforms. Inspired by the timeless beauty and mystery of medieval castles, this theme combines rich, deep colors with a clean and modern design."
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "0rem",      // <<< much smaller top padding
          paddingBottom: "0rem",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Main logo */}
        <img
          src="/images/main/icon_transparent.png"
          alt="Dark Castle Logo"
          style={{
            width: 300,
            height: 300,
            borderRadius: 20,
            marginBottom: "0.2rem",  // <<< tighter spacing
            marginTop: "0rem",
          }}
        />

        <h1 style={{ fontSize: "2.7rem", margin: "0 0 0.3rem 0" }}>
          Dark Castle Theme
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.45,
            opacity: 0.9,
            maxWidth: 700,
            margin: "0 1rem",
          }}
        >
          A vibrantly elegant dark theme available for multiple platforms.
          Inspired by the timeless beauty and mystery of medieval castles,
          this theme combines rich, deep colors with a clean and modern design.
        </p>
      </div>
            <div>
        <ColorPalette />
      </div>
    </>
  )
}
