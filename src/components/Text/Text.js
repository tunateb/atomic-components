import React from 'react'
import './Text.css';

const Text = ({ type, small=false, children }) => {
  const textClassses = `text text-${type} ${small ? 'text-small' : ''}`

  return (
    <p className={textClassses}>
      {children}
    </p>
  )
}

export default Text;