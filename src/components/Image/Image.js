import React from 'react'
import classNames from 'classnames'
import './image.scss'

function Image({ src, alt, className }) {
  return <img src={src} alt={alt} className={classNames('image', className)} />
}

export default Image
