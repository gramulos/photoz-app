import React from 'react'
import classNames from 'classnames'
import './box.scss'

function Box({
  children,
  centerHorizontally,
  centerVertically,
  directionColumn,
  className,
}) {
  return (
    <div
      className={classNames(
        'box',
        {
          'box--center-horizontally': centerHorizontally,
          'box--center-vertically': centerVertically,
          'box--direction-column': directionColumn,
        },
        className
      )}
    >
      {children}
    </div>
  )
}

export default Box
