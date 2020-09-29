import React from 'react'
import './comment.scss'

const getInitials = (author) => {
  const nameParts = author.split(' ')

  return nameParts.reduce((acc, part) => {
    if (acc.length) {
      return `${acc} ${part[0]}`
    }

    return part[0]
  }, '')
}

function Comment({ author, text }) {
  const initials = getInitials(author)

  return (
    <div className="comment">
      <div className="comment__author">{initials}</div>
      <div className="comment__text">{text}</div>
    </div>
  )
}

export default Comment
