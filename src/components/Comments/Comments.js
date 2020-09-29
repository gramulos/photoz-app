import React, { useState } from 'react'
import { InputGroup, Button, InputGroupAddon, Input } from 'reactstrap'
import Comment from './Comment'

const data = {
  1: [
    {
      id: 11,
      author: 'John Doe',
      text: 'Nice picture',
    },
    {
      id: 12,
      author: 'John Doe',
      text: 'I like it',
    },
  ],
  2: [
    {
      id: 21,
      author: 'John Doe',
      text: 'Great car',
    },
  ],
}

function Comments({ postId }) {
  const [isCommentsLoaded, loadComments] = useState(false)
  const comments = data[postId]

  return (
    <div className="p-4">
      {!isCommentsLoaded ? (
        <Button
          color="link"
          className="mx-auto mb-4 d-block"
          onClick={() => loadComments(true)}
        >
          Show Comments
        </Button>
      ) : (
        <>
          {comments.map(({ author, text, id }) => (
            <Comment key={id} author={author} text={text} />
          ))}
        </>
      )}
      <InputGroup>
        <Input placeholder="Write a comment..." />
        <InputGroupAddon addonType="append">
          <Button color="primary">Submit</Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default Comments
