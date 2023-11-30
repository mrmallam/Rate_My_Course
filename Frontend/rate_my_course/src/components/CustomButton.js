import React from 'react';

const CustomButton = ({ label, color, bgColor, width, height }) => {
  // Default styles
  const defaultStyles = {
    color: color || 'white',
    backgroundColor: bgColor || '#BF3127',
    width: width || '150px',
    height: height || '50px',
    borderRadius: '50px',
    fontWeight: '700',
    textTransform: 'uppercase',
    textAlign: 'center'
  };

  return (
    <button style={defaultStyles}>
      {label}
    </button>
  );
};

export default CustomButton;
