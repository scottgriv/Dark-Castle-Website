import React, { useState } from 'react';

const ColorPalette = () => {
  const [alertMessage, setAlertMessage] = useState('');
  const [alertColor, setAlertColor] = useState('');

  const copyToClipboard = (colorCode) => {
    navigator.clipboard.writeText(colorCode).then(() => {
      setAlertMessage(`${colorCode} copied to clipboard`);
      setAlertColor(colorCode === '#292929' ? '#FFFFFF' : colorCode); // Handle special case for #292929
      setTimeout(() => setAlertMessage(''), 3000); // Hide the alert after 3 seconds
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  const handleKeyPress = (event, colorCode) => {
    if (event.key === 'Enter' || event.key === ' ') {
      copyToClipboard(colorCode);
    }
  };

  const colors = [
    "#000000", "#292929", "#575757", "#9C9C9C", "#FFFFFF", "#EF6B73",
    "#FF8040", "#FFD580", "#BAE67E", "#4DBCED", "#FF000F", "#08D220",
    "#4164FF", "#9354FF", "#0D8501", "#007B88", "#2D449B", "#AA1B86"
  ];

  return (
    <div className="color-palette-wrapper">
      <h2>Color Palette</h2>
      {alertMessage && (
        <div className="custom-alert" style={{ color: alertColor, borderColor: alertColor }}>
          {alertMessage}
        </div>
      )}
      <div className="color-palette-container">
        <div className="color-palette-grid">
          {colors.map(color => (
            <div
              key={color}
              className="color-circle"
              style={{ backgroundColor: color }}
              title={color}
              tabIndex="0" // Make the div focusable
              role="button" // Add button role
              aria-label={`Copy color code ${color} to clipboard`} // Add aria-label for accessibility
              onClick={() => copyToClipboard(color)}
              onKeyPress={(e) => handleKeyPress(e, color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
