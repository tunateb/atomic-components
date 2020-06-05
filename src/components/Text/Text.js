import React from 'react'
import './Text.css';

const Text = ({ type, title=false, small=false, hiddenText = false, children }) => {
  const textClassses = `text text-${type} ${title ? 'text-title' : ''} ${small ? 'text-small' : ''} ${hiddenText ? "text-hidden" : ""}`

  return (
    <p className={textClassses}>
      {children}
    </p>
  )
}

export default Text;