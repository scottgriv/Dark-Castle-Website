import React, { useState, useEffect } from "react"

const ColorPalette = () => {
  const [alertMessage, setAlertMessage] = useState("")
  const [alertColor, setAlertColor] = useState("")
  const [showAlert, setShowAlert] = useState(false)

  useEffect(() => {
    let timer
    if (showAlert) {
      timer = setTimeout(() => {
        setShowAlert(false)
      }, 3000) // Hide the alert after 3 seconds
    }
    return () => clearTimeout(timer)
  }, [showAlert])

  const copyToClipboard = colorCode => {
    const truncatedColorCode = colorCode.substring(1); // Remove the #
    navigator.clipboard
      .writeText(truncatedColorCode)
      .then(() => {
        setAlertMessage(`${colorCode} copied to clipboard`)
        setAlertColor(colorCode === "#292929" ? "#FFFFFF" : `${colorCode}`) // Handle special case for 292929
        setShowAlert(false) // Reset the alert visibility
        setTimeout(() => setShowAlert(true), 0) // Show the alert after reset
      })
      .catch(err => {
        console.error("Could not copy text: ", err)
      })
  }
  
  const handleKeyPress = (event, colorCode) => {
    if (event.key === "Enter" || event.key === " ") {
      copyToClipboard(colorCode)
    }
  }

  const colors = [
    ["#000000", "Background"],
    ["#1A1A1A", "Code Blocks"],
    ["#292929", "Current Line Highlight"],
    ["#575757", "Word Highlight"],
    ["#9C9C9C", "Borders, Icons, & Menu Text"],
    ["#FFFFFF", "Punctuation"],
    ["#EF6B73", "Errors"],
    ["#FF8040", "Accent & Operators"],
    ["#FFD580", "Foreground, Plain Text, Brackets, & Symbols"],
    ["#BAE67E", "Headings"],
    ["#4DBCED", "Tags & REGEX"],
    ["#FF000F", "Strings"],
    ["#FF5503", "Classes & Words"],
    ["#08D220", "Variables & Characters"],
    ["#4164FF", "URLs"],
    ["#9354FF", "Numbers"],
    ["#0D8501", "Comments"],
    ["#007B88", "Preprocessor"],
    ["#2D449B", "Horizontal Rule"],
    ["#AA1B86", "Functions & Keywords"],
  ]

  return (
    <div className="color-palette-wrapper">
      <h2 className="platform-wrapper">Color Palette</h2>
      {alertMessage && (
        <div
          className={`custom-alert ${showAlert ? "show" : ""}`}
          style={{ color: alertColor, borderColor: alertColor }}
        >
          {alertMessage}
        </div>
      )}
      <div className="color-palette-container">
        <div className="color-palette-grid">
          {colors.map(color => (
            <div
              key={color[0]}
              className="color-circle"
              style={{ backgroundColor: color[0] }}
              title={color[0]}
              tabIndex="0" // Make the div focusable
              role="button" // Add button role
              aria-label={`Copy color code ${color[0]} to clipboard`} // Add aria-label for accessibility
              onDoubleClick={() => copyToClipboard(color[0])}
              onKeyPress={e => handleKeyPress(e, color[0])}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorPalette
