import React from 'react'
import classNames from 'classnames'
import './box.scss'

function Box({
  as: As = 'div',
  children,
  centerHorizontally,
  centerVertically,
  directionColumn,
  className,
}) {
  return (
    <As
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
    </As>
  )
}

export default Box
