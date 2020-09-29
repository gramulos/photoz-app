import React from 'react'
import classNames from 'classnames'
import './text.scss'

function Text({ children, as: As = 'p', className }) {
  return <As className={classNames(As, className)}>{children}</As>
}

export default Text
