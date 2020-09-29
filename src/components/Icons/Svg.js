import React from 'react'
import classNames from 'classnames'
import { getSize } from './utils'

function Svg({ children, width, height, size, className, ...props }) {
  const resized = getSize(width, height, size)

  return (
    <svg
      {...props}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${resized.width}px`,
        height: `${resized.height}px`,
      }}
      className={classNames(className)}
    >
      {children}
    </svg>
  )
}

export default Svg
